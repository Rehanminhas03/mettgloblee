"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X, Linkedin, Twitter, Mail, Briefcase, Award, GraduationCap } from "lucide-react"
import { useEffect } from "react"

export interface TeamMemberFull {
  name: string
  role: string
  bio: string
  fullBio?: string
  expertise?: string[]
  experience?: string
  achievements?: string[]
  image: string
  linkedin?: string
  twitter?: string
  email?: string
}

interface TeamMemberModalProps {
  member: TeamMemberFull | null
  isOpen: boolean
  onClose: () => void
}

export function TeamMemberModal({ member, isOpen, onClose }: TeamMemberModalProps) {
  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden"
    }
    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"
    }
  }, [isOpen, onClose])

  if (!member) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-background/80 backdrop-blur-xl" />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, type: "spring", damping: 25 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl glass-strong border border-border/50 shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-full glass-subtle hover:bg-primary/20 transition-all duration-300"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Content */}
            <div className="grid md:grid-cols-5 gap-0">
              {/* Image Section */}
              <div className="md:col-span-2 relative h-64 md:h-full min-h-[300px]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t md:bg-linear-to-r from-background via-background/50 to-transparent" />

                {/* Mobile Name Overlay */}
                <div className="absolute bottom-4 left-4 md:hidden">
                  <h2 className="text-xl font-bold text-foreground mb-1">{member.name}</h2>
                  <p className="text-xs tracking-wider uppercase text-primary">{member.role}</p>
                </div>
              </div>

              {/* Info Section */}
              <div className="md:col-span-3 p-6 sm:p-8">
                {/* Desktop Name */}
                <div className="hidden md:block mb-6">
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-1">{member.name}</h2>
                  <p className="text-xs tracking-wider uppercase text-primary">{member.role}</p>
                </div>

                {/* Full Bio */}
                <div className="mb-6">
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    {member.fullBio || member.bio}
                  </p>
                </div>

                {/* Experience */}
                {member.experience && (
                  <div className="mb-5">
                    <div className="flex items-center gap-2 mb-2">
                      <Briefcase className="w-4 h-4 text-primary" />
                      <h3 className="text-xs tracking-wider uppercase text-primary font-medium">Experience</h3>
                    </div>
                    <p className="text-xs text-foreground/70 leading-relaxed pl-6">
                      {member.experience}
                    </p>
                  </div>
                )}

                {/* Expertise */}
                {member.expertise && member.expertise.length > 0 && (
                  <div className="mb-5">
                    <div className="flex items-center gap-2 mb-3">
                      <GraduationCap className="w-4 h-4 text-primary" />
                      <h3 className="text-xs tracking-wider uppercase text-primary font-medium">Expertise</h3>
                    </div>
                    <div className="flex flex-wrap gap-2 pl-6">
                      {member.expertise.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 text-[10px] tracking-wider uppercase rounded-full glass-subtle text-foreground/70"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Achievements */}
                {member.achievements && member.achievements.length > 0 && (
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Award className="w-4 h-4 text-primary" />
                      <h3 className="text-xs tracking-wider uppercase text-primary font-medium">Key Achievements</h3>
                    </div>
                    <ul className="space-y-2 pl-6">
                      {member.achievements.map((achievement, index) => (
                        <li key={index} className="text-xs text-foreground/70 leading-relaxed flex items-start gap-2">
                          <span className="w-1 h-1 rounded-full bg-primary mt-1.5 shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Social Links */}
                <div className="flex items-center gap-3 pt-4 border-t border-border/30">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl glass-subtle hover:bg-primary/20 hover:glow-primary transition-all duration-300"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                  {member.twitter && (
                    <a
                      href={member.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl glass-subtle hover:bg-primary/20 hover:glow-primary transition-all duration-300"
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                  )}
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="p-3 rounded-xl glass-subtle hover:bg-primary/20 hover:glow-primary transition-all duration-300"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  )}
                  {!member.linkedin && !member.twitter && !member.email && (
                    <a
                      href="#"
                      className="p-3 rounded-xl glass-subtle hover:bg-primary/20 hover:glow-primary transition-all duration-300"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
