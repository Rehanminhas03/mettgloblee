"use client"

import { motion } from "framer-motion"
import { Eye } from "lucide-react"
import type { TeamMemberFull } from "./TeamMemberModal"

interface TeamGridProps {
  members: TeamMemberFull[]
  onMemberClick?: (member: TeamMemberFull) => void
}

export function TeamGrid({ members, onMemberClick }: TeamGridProps) {
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
            <span className="text-[9px] tracking-[0.2em] uppercase text-primary/80 font-medium">The Crew</span>
          </div>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tight mb-3">
            <span className="text-gradient-subtle">Our</span> <span className="text-gradient">Experts</span>
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground max-w-2xl">
            Meet the talented professionals who bring diverse expertise and passion to every project,
            driving innovation and delivering exceptional results for our clients worldwide.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {members.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group"
            >
              <div
                onClick={() => onMemberClick?.(member)}
                className="rounded-2xl overflow-hidden glass-card hover:glow-border transition-all duration-700 cursor-pointer h-full flex flex-col"
              >
                <div className="relative h-48 sm:h-56 overflow-hidden shrink-0">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-background via-background/40 to-transparent" />

                  {/* View Profile Overlay */}
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="p-3 rounded-full glass-strong">
                      <Eye className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                </div>
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="text-xs tracking-wider uppercase text-foreground mb-0.5 group-hover:text-primary transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-[10px] tracking-wider uppercase text-primary/70 mb-2">{member.role}</p>

                  {/* Short bio description */}
                  {member.bio && (
                    <p className="text-[10px] text-muted-foreground leading-relaxed line-clamp-2 flex-1">
                      {member.bio}
                    </p>
                  )}

                  {/* Click hint on hover */}
                  <p className="text-[8px] tracking-wider uppercase text-primary/40 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    Click to view full profile
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
