"use client"

import { cn } from "@/lib/utils"
import { IconMenu2, IconX } from "@tabler/icons-react"
import { motion, AnimatePresence } from "framer-motion"
import React, { useState, useEffect } from "react"

interface NavbarProps {
  children: React.ReactNode
  className?: string
}

interface NavBodyProps {
  children: React.ReactNode
  className?: string
  visible?: boolean
}

interface NavItemsProps {
  items: {
    name: string
    link: string
    hasDropdown?: boolean
  }[]
  className?: string
  onItemClick?: () => void
  activeItem?: string
  onHoverItem?: (name: string | null) => void
  renderDropdown?: (itemName: string) => React.ReactNode
}

interface MobileNavProps {
  children: React.ReactNode
  className?: string
  visible?: boolean
}

interface MobileNavHeaderProps {
  children: React.ReactNode
  className?: string
}

interface MobileNavMenuProps {
  children: React.ReactNode
  className?: string
  isOpen: boolean
  onClose: () => void
}

export const Navbar = ({ children, className }: NavbarProps) => {
  const [visible, setVisible] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      if (scrollY > 50) {
        setVisible(true)
      } else {
        setVisible(false)
      }
    }

    // Check initial scroll position
    handleScroll()

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className={cn("fixed inset-x-0 top-0 z-50 w-full px-4 pt-3", className)}>
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(
              child as React.ReactElement<{ visible?: boolean }>,
              { visible }
            )
          : child
      )}
    </div>
  )
}

export const NavBody = ({ children, className, visible }: NavBodyProps) => {
  return (
    <motion.div
      initial={false}
      animate={{
        maxWidth: visible ? "700px" : "1200px",
        paddingLeft: visible ? "24px" : "20px",
        paddingRight: visible ? "24px" : "20px",
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 35,
      }}
      className={cn(
        "relative z-60 mx-auto hidden w-full flex-row items-center justify-between rounded-2xl py-2 lg:flex",
        "backdrop-blur-xl border border-border/40 transition-shadow duration-300",
        visible
          ? "bg-background/95 shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
          : "bg-background/70 shadow-[0_4px_20px_rgba(0,0,0,0.2)]",
        className
      )}
    >
      {children}
    </motion.div>
  )
}

export const NavItems = ({
  items,
  className,
  onItemClick,
  activeItem,
  onHoverItem,
  renderDropdown,
}: NavItemsProps) => {
  const [hovered, setHovered] = useState<number | null>(null)

  const handleMouseEnter = (idx: number, itemName: string) => {
    setHovered(idx)
    if (onHoverItem) {
      onHoverItem(itemName)
    }
  }

  const handleMouseLeave = () => {
    setHovered(null)
    if (onHoverItem) {
      onHoverItem(null)
    }
  }

  return (
    <div
      onMouseLeave={handleMouseLeave}
      className={cn(
        "flex flex-row items-center justify-center gap-0.5",
        className
      )}
    >
      {items.map((item, idx) => (
        <div key={`link-${idx}`} className="relative">
          <a
            onMouseEnter={() => handleMouseEnter(idx, item.name)}
            onClick={onItemClick}
            className={cn(
              "relative px-2.5 py-1.5 text-[10px] tracking-[0.08em] uppercase transition-colors duration-200 whitespace-nowrap block",
              activeItem === item.link
                ? "text-primary"
                : "text-foreground/60 hover:text-foreground"
            )}
            href={item.link}
          >
            {hovered === idx && (
              <motion.div
                layoutId="hovered"
                className="absolute inset-0 h-full w-full rounded-lg bg-white/5"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-20">{item.name}</span>
          </a>
          {item.hasDropdown && hovered === idx && renderDropdown && (
            <div
              onMouseEnter={() => handleMouseEnter(idx, item.name)}
              onMouseLeave={handleMouseLeave}
            >
              {renderDropdown(item.name)}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export const MobileNav = ({ children, className, visible }: MobileNavProps) => {
  return (
    <motion.div
      initial={false}
      animate={{
        width: visible ? "92%" : "100%",
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 35,
      }}
      className={cn(
        "relative z-50 mx-auto flex w-full flex-col items-center justify-between px-4 py-2.5 lg:hidden",
        "backdrop-blur-xl border border-border/40 rounded-2xl transition-shadow duration-300",
        visible
          ? "bg-background/95 shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
          : "bg-background/70 shadow-[0_4px_20px_rgba(0,0,0,0.2)]",
        className
      )}
    >
      {children}
    </motion.div>
  )
}

export const MobileNavHeader = ({
  children,
  className,
}: MobileNavHeaderProps) => {
  return (
    <div
      className={cn(
        "flex w-full flex-row items-center justify-between",
        className
      )}
    >
      {children}
    </div>
  )
}

export const MobileNavMenu = ({
  children,
  className,
  isOpen,
}: MobileNavMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.2 }}
          className={cn(
            "w-full flex flex-col items-start justify-start gap-3 pt-4 mt-4 border-t border-border/30 overflow-hidden",
            className
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export const MobileNavToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean
  onClick: () => void
}) => {
  return isOpen ? (
    <IconX
      className="w-5 h-5 text-foreground cursor-pointer"
      onClick={onClick}
    />
  ) : (
    <IconMenu2
      className="w-5 h-5 text-foreground cursor-pointer"
      onClick={onClick}
    />
  )
}

export const NavbarLogo = ({
  children,
  href = "/",
}: {
  children?: React.ReactNode
  href?: string
}) => {
  return (
    <a
      href={href}
      className="relative z-20 flex items-center gap-1 py-1 text-xs sm:text-sm font-semibold tracking-[0.08em] uppercase shrink-0"
    >
      {children || (
        <>
          <span className="text-gradient">mett</span>
          <span className="text-foreground/80">Global</span>
        </>
      )}
    </a>
  )
}

export const NavbarButton = ({
  href,
  as: Tag = "a",
  children,
  className,
  variant = "primary",
  ...props
}: {
  href?: string
  as?: React.ElementType
  children: React.ReactNode
  className?: string
  variant?: "primary" | "secondary" | "glass"
} & (
  | React.ComponentPropsWithoutRef<"a">
  | React.ComponentPropsWithoutRef<"button">
)) => {
  const baseStyles =
    "px-3.5 py-1.5 rounded-lg text-[10px] tracking-[0.08em] uppercase font-medium relative cursor-pointer hover:-translate-y-0.5 transition-all duration-200 inline-flex items-center gap-1.5 shrink-0"

  const variantStyles = {
    primary:
      "bg-primary text-primary-foreground shadow-[0_0_20px_rgba(0,255,213,0.3)] hover:shadow-[0_0_30px_rgba(0,255,213,0.5)]",
    secondary:
      "bg-transparent text-foreground/60 hover:text-foreground",
    glass:
      "bg-white/5 backdrop-blur-lg border border-border/30 hover:bg-white/10 hover:border-primary/50 text-foreground",
  }

  return (
    <Tag
      href={href || undefined}
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </Tag>
  )
}
