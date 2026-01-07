"use client"

import { motion } from "framer-motion"
import { Linkedin, Twitter, Mail, Eye } from "lucide-react"
import type { TeamMemberFull } from "./TeamMemberModal"

interface LeadershipSectionProps {
  members: TeamMemberFull[]
  onMemberClick?: (member: TeamMemberFull) => void
}

export function LeadershipSection({ members, onMemberClick }: LeadershipSectionProps) {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-6">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-px bg-primary"
            />
            <span className="text-[9px] tracking-[0.2em] uppercase text-primary/80 font-medium">Leadership</span>
          </div>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tight">
            <span className="text-gradient-subtle">Executive</span> <span className="text-gradient">Team</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {members.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="group"
            >
              <div
                onClick={() => onMemberClick?.(member)}
                className="rounded-3xl overflow-hidden glass-card hover:glow-border transition-all duration-700 cursor-pointer"
              >
                <div className="grid md:grid-cols-5">
                  <div className="md:col-span-2 relative h-56 md:h-full overflow-hidden">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-r from-transparent to-background/80" />

                    {/* View Profile Overlay */}
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="p-3 rounded-full glass-strong">
                        <Eye className="w-5 h-5 text-primary" />
                      </div>
                    </div>
                  </div>
                  <div className="md:col-span-3 p-6 md:p-8 flex flex-col justify-center">
                    <h3 className="text-sm md:text-base font-semibold tracking-wide text-foreground mb-1 group-hover:text-primary transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-[10px] tracking-wider uppercase text-primary mb-3">{member.role}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-5">{member.bio}</p>

                    {/* Click to view hint */}
                    <p className="text-[9px] tracking-wider uppercase text-primary/50 mb-4 group-hover:text-primary transition-colors">
                      Click to view full profile
                    </p>

                    <div className="flex items-center gap-3">
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          onClick={(e) => e.stopPropagation()}
                          className="p-3 rounded-xl glass-subtle hover:bg-primary/10 hover:glow-border transition-all duration-500"
                        >
                          <Linkedin className="w-4 h-4" />
                        </a>
                      )}
                      {member.twitter && (
                        <a
                          href={member.twitter}
                          onClick={(e) => e.stopPropagation()}
                          className="p-3 rounded-xl glass-subtle hover:bg-primary/10 hover:glow-border transition-all duration-500"
                        >
                          <Twitter className="w-4 h-4" />
                        </a>
                      )}
                      <a
                        href="#"
                        onClick={(e) => e.stopPropagation()}
                        className="p-3 rounded-xl glass-subtle hover:bg-primary/10 hover:glow-border transition-all duration-500"
                      >
                        <Mail className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
