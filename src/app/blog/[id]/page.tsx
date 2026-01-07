import { Navigation, Footer } from "@/components/layout"
import { AnimatedBackground } from "@/components/common"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, User, Share2, Linkedin, Twitter } from "lucide-react"
import type { Metadata } from "next"
import { notFound } from "next/navigation"

const blogPosts = [
  {
    id: 1,
    title: "AI Video Generation for E-commerce: The 90-Day Story Approach",
    category: "AI",
    author: "METT Global Team",
    date: "Jan 5, 2026",
    readTime: "8 min read",
    excerpt:
      "Learn how AI-generated transformation videos with storytelling approaches are revolutionizing e-commerce marketing, building trust through gradual, realistic product demonstrations.",
    image: "/blog-ai-video-ecommerce.jpg",
    content: `
## The Power of Storytelling in E-commerce Marketing

In an era of "miracle claims" and instant results marketing, consumers are becoming increasingly skeptical. Our work with Yuaia Haircare from the Netherlands taught us a valuable lesson: authenticity and gradual transformation build more trust than dramatic before-and-after shots.

## The 90-Day Approach

### Why 90 Days?

Real product results take time. When we created the AI-generated video campaign for Yuaia's Grow & Glow Formula+, we chose a 90-day narrative because:

- **Builds Credibility** - Viewers understand that real change is gradual
- **Manages Expectations** - No false promises or miracle claims
- **Creates Engagement** - A journey is more compelling than an instant result
- **Educational Value** - Time to explain the science behind the product

### The Transformation Journey

Our video showed progressive changes that viewers could believe:

**Days 1-30:** Reduced shedding during brushing, introducing the routine
**Days 31-60:** Stronger hair strands, new growth at the hairline
**Days 61-90:** Visible improvement in density and overall hair health

## AI Generation Techniques

### Creating Believable Characters

The key to our success was creating an AI character (inspired by the brand founder) that viewers could relate to. The character:

- Had realistic facial expressions and emotions
- Showed genuine excitement about gradual progress
- Maintained consistency throughout the 90-day narrative

### Visual Continuity

One of the biggest challenges in AI video is maintaining visual continuity. We developed techniques to:

- Keep the same character appearance across all scenes
- Show subtle, progressive changes in hair quality
- Maintain consistent lighting and environment

## Educational vs. Sales-Focused Content

### The Trust Factor

Traditional e-commerce videos often fail because they're too focused on selling. Our approach prioritized:

- **Information over promotion** - Explaining how the product works
- **Honesty about timeline** - Setting realistic expectations
- **Product integration** - Showing the product naturally, not as a miracle solution

### Results That Speak

This approach resonated with the Netherlands/EU market, where consumers particularly value:

- Transparent marketing
- Scientific backing
- Realistic claims

## Implementing This Approach

### For Your Brand

If you're considering AI video for your e-commerce brand:

1. **Define Your Timeline** - What's a realistic expectation for your product?
2. **Create a Journey** - Map out the transformation stages
3. **Prioritize Education** - Help viewers understand the "why" behind results
4. **Be Authentic** - Avoid miracle claims that erode trust

### Technical Considerations

- Work with AI specialists who understand brand consistency
- Invest in quality voice-over and sound design
- Test content with your target demographic before launch

## Conclusion

The future of e-commerce video isn't about flashy effects or miracle claims—it's about building trust through authentic storytelling. AI gives us the tools to create compelling narratives at scale, but the strategy behind the content determines success.

At METT Global, we've seen firsthand how this approach transforms engagement and builds lasting customer relationships. The 90-day story approach isn't just a technique—it's a philosophy of honest marketing that resonates with today's discerning consumers.
    `,
  },
  {
    id: 2,
    title: "Creating Audiobook Covers with AI: ACX Standards Guide",
    category: "AI",
    author: "METT Global Team",
    date: "Jan 3, 2026",
    readTime: "6 min read",
    excerpt:
      "A complete guide to designing ACX-compliant audiobook covers using AI, including square format requirements, color contrast principles, and scaling design work efficiently.",
    image: "/blog-audiobook-covers.jpg",
    content: `
## The Audiobook Cover Challenge

When an audiobook publisher approached us needing 20 unique cover design inspirations for each of 151 titles—a total of 3,020 designs—we knew traditional design methods wouldn't scale. This project taught us valuable lessons about AI-powered design at scale while maintaining ACX quality standards.

## Understanding ACX Requirements

### The Technical Specifications

Amazon's Audiobook Creation Exchange (ACX) has specific requirements:

- **Square Format** - Unlike traditional book covers, audiobook covers must be square
- **Minimum Resolution** - 2400 x 2400 pixels recommended
- **Clear at Small Sizes** - Must be legible as a tiny thumbnail
- **No Bleed Required** - Unlike print, digital covers have clean edges

### Design Principles That Work

Based on our experience, successful audiobook covers share these traits:

1. **Single Focal Point** - One standout design element, not a busy composition
2. **Bold, Clear Title** - Text must be readable at 50x50 pixels
3. **High Color Contrast** - Ensures visibility across devices
4. **Classic Aesthetic** - Timeless designs that don't look dated quickly

## AI-Powered Design Workflow

### Our 20-Variation Approach

For each title, we generated 20 unique variations by:

- Varying color palettes while maintaining contrast
- Testing different focal imagery styles
- Experimenting with typography treatments
- Adjusting composition balance

### Maintaining Quality at Scale

The challenge with 3,020 designs is consistency. Our workflow included:

**Prompt Engineering:** Developed standardized prompts that reliably produced ACX-compliant output

**Quality Checkpoints:** Every design reviewed against ACX requirements before client delivery

**Iteration Cycles:** Refined prompts based on client feedback to improve subsequent batches

## Practical Tips for AI Cover Design

### What Works

- **Genre-appropriate imagery** - Match visual style to book category
- **Symbolic elements** - Abstract representations often work better than literal interpretations
- **Complementary colors** - AI excels at generating harmonious color combinations
- **Clean backgrounds** - Solid or subtle gradient backgrounds highlight the title

### Common Pitfalls

- **Over-complicated designs** - Resist the urge to add too many elements
- **Illegible text** - Always test readability at small sizes
- **Generic stock imagery** - AI can create unique, ownable visuals instead
- **Inconsistent series branding** - For book series, maintain visual continuity

## The Economics of Scale

### Traditional vs. AI-Powered Design

For 3,020 designs, traditional design would have:

- Taken months of designer time
- Cost thousands of dollars per designer
- Limited variation due to human fatigue

Our AI-powered approach delivered:

- All designs in weeks, not months
- Significant cost savings for the publisher
- Genuine variety across all 20 variations per title

### The $500 Project

We completed this entire project at $500 total value—demonstrating how AI enables creative solutions that were previously economically unfeasible.

## Lessons Learned

### For Publishers

- AI design is production-ready for audiobook covers
- Having 20 options per title significantly improves final selection
- ACX compliance can be built into the AI workflow

### For Designers

- AI is a tool that amplifies capability, not a replacement
- Quality control and curation remain human responsibilities
- Understanding platform requirements is crucial for AI prompt engineering

## Conclusion

AI-powered design has made large-scale creative projects economically viable. The key is understanding platform requirements, developing reliable workflows, and maintaining quality standards throughout production.

Our audiobook cover project proved that with the right approach, AI can deliver thousands of professional, platform-compliant designs while providing genuine creative variety that serves both publishers and readers.
    `,
  },
  {
    id: 3,
    title: "Building Real Estate Platforms: PropertyHub Case Insights",
    category: "Technology",
    author: "METT Global Team",
    date: "Dec 28, 2025",
    readTime: "10 min read",
    excerpt:
      "Insights from building a full-stack real estate platform including property listings, advanced search, payment integration architecture, and CRM connectivity.",
    image: "/blog-real-estate-platform.jpg",
    content: `
## The Real Estate Digital Challenge

Real estate is one of the last industries to fully embrace digital transformation. When PropertyHub approached us to build their platform, they had a clear vision: create a modern, professional presence that captures leads effectively and integrates with their existing business tools.

## Project Overview

### The Requirements

- Property listing system with advanced search
- Beautiful gallery presentations for each property
- Lead capture throughout the user journey
- Payment gateway integration readiness
- GoHighLevel (GHL) CRM connectivity

### Technology Decisions

We chose a modern stack that balances performance with maintainability:

- **Next.js** for the frontend and API routes
- **React** components for interactive elements
- **Tailwind CSS** for responsive, custom design
- **Modular architecture** for future integrations

## Building the Property Listing System

### Search That Actually Works

Real estate search is deceptively complex. Users need to filter by:

- Location (area, neighborhood, proximity)
- Price range (with flexible bounds)
- Property type (house, apartment, commercial)
- Features (bedrooms, bathrooms, amenities)
- Size (square footage ranges)

We implemented progressive filtering that updates results in real-time without page reloads, creating a smooth user experience.

### Property Detail Pages

Each listing needed to tell a story. Our property pages include:

- High-quality image galleries with lightbox viewing
- Key property statistics prominently displayed
- Detailed descriptions with formatting support
- Location maps with nearby amenities
- Clear calls-to-action for inquiries

## Lead Capture Strategy

### Multiple Touchpoints

Every interaction is an opportunity to capture interest:

- **Quick inquiry forms** on listing cards
- **Detailed contact forms** on property pages
- **Property alerts signup** for new listings
- **Chat integration** for immediate questions

### Form Design Principles

Based on our experience, effective real estate forms:

- Ask only essential information initially
- Progressive profiling for returning visitors
- Clear value proposition for submitting
- Mobile-optimized with minimal typing

## Integration Architecture

### Payment Gateway Preparation

While the initial phase focused on the website, we architected for future payment integration (PKR 25-30K phase):

- Abstracted payment interfaces
- Secure handling patterns for financial data
- Multi-gateway support structure
- Pakistani payment provider compatibility

### CRM Connectivity

GoHighLevel integration (PKR 25-30K phase) requires:

- Lead data synchronization
- Automated follow-up triggers
- Pipeline management connectivity
- Reporting and analytics integration

We designed the data layer to accommodate these future requirements without requiring significant refactoring.

## Lessons from the Trenches

### What We Learned

**Mobile-First is Non-Negotiable:** Over 70% of property searches happen on mobile devices. Every feature must work flawlessly on small screens.

**Speed Matters:** Slow property galleries lose leads. We implemented lazy loading, optimized images, and edge caching.

**SEO for Real Estate:** Property listings need structured data, proper meta tags, and location-based optimization for local search.

### Common Pitfalls to Avoid

- Overcomplicating the search interface
- Neglecting image optimization
- Underestimating content management needs
- Building without integration in mind

## The Results

PropertyHub received a complete platform valued at PKR 125,000 that:

- Showcases properties professionally
- Captures leads throughout the journey
- Stands ready for payment and CRM integration
- Scales for future growth

## For Your Real Estate Project

### Key Considerations

1. **Define your integration needs early** - Retrofitting is expensive
2. **Prioritize mobile experience** - Test every feature on phones
3. **Plan for scale** - Real estate portfolios grow
4. **Invest in photography** - Great images sell properties

### Phased Approach Benefits

Breaking the project into phases (website, payments, CRM) allowed PropertyHub to:

- Launch faster with core functionality
- Spread investment over time
- Validate requirements before building integrations
- Adapt to changing business needs

## Conclusion

Building a real estate platform is more than creating a listing website—it's creating a digital business infrastructure. The key is balancing immediate needs with future scalability, ensuring every component serves both the property seekers and the business goals.
    `,
  },
  {
    id: 4,
    title: "AI Content Generation for Production Companies",
    category: "AI",
    author: "METT Global Team",
    date: "Dec 22, 2025",
    readTime: "7 min read",
    excerpt:
      "How production companies can leverage AI for content generation, maintaining quality while scaling output through automated workflows and quality checkpoints.",
    image: "/blog-ai-content-production.jpg",
    content: `
## The Production Scaling Challenge

Content production companies face a constant tension: clients want more content, faster, and at lower costs—but quality can't suffer. Our work with Cobra Production showed us how AI can resolve this tension when implemented thoughtfully.

## Understanding the AI Content Opportunity

### Where AI Excels

In our experience, AI delivers the most value in:

- **Ideation and Brainstorming** - Generating concepts and variations rapidly
- **First Drafts** - Creating starting points for human refinement
- **Asset Generation** - Producing visual elements at scale
- **Routine Production** - Automating repetitive creative tasks

### Where Humans Remain Essential

AI isn't a replacement for creative talent:

- Strategic creative direction
- Final quality approval
- Brand voice consistency
- Emotional resonance and storytelling
- Client relationship management

## Building an AI Content Workflow

### The Three-Stage Model

We developed a workflow that maximizes AI efficiency while maintaining quality:

**Stage 1: AI Generation**
- Content ideation and concept development
- Initial script or copy drafts
- Visual asset creation
- Multiple variation generation

**Stage 2: Human Refinement**
- Creative review and selection
- Brand alignment editing
- Quality enhancement
- Storytelling optimization

**Stage 3: Quality Control**
- Final review against standards
- Technical compliance check
- Client requirement verification
- Delivery preparation

### Integration Points

The key is identifying where AI integrates into existing workflows:

- Does it replace a step entirely?
- Does it augment human capability?
- Does it create new possibilities?

For Cobra Production, AI primarily augmented their existing creative team, enabling them to take on more projects without proportionally increasing staff.

## Quality Control Systems

### Automated Checks

We implemented automated quality gates:

- Brand guideline compliance scoring
- Technical specification validation
- Consistency checks across content series
- Format and delivery requirement verification

### Human Checkpoints

Automated checks catch technical issues, but human review ensures:

- Creative quality meets standards
- Content achieves intended emotional impact
- Brand voice remains consistent
- Client-specific requirements are met

## Measuring Success

### Key Metrics

Track these indicators to measure AI integration success:

- **Output Volume** - Content pieces produced per time period
- **Quality Scores** - Client satisfaction and approval rates
- **Efficiency Ratio** - Time spent per content piece
- **Cost per Piece** - Total production cost divided by output
- **Revision Cycles** - Number of revisions before approval

### Our Results

For Cobra Production, the AI content system delivered:

- Significant increase in content output capacity
- Maintained quality standards across higher volume
- Reduced per-piece production costs
- Faster turnaround times for clients

## Practical Implementation Guide

### Starting Small

Don't try to automate everything at once:

1. **Identify repetitive tasks** - What content types are most standardized?
2. **Pilot with low-risk projects** - Test AI workflows on internal or smaller projects
3. **Gather feedback** - Learn from each iteration
4. **Scale gradually** - Expand AI use as you refine processes

### Tool Selection

Consider these factors when choosing AI tools:

- **Output quality** for your specific content types
- **Integration capability** with existing tools
- **Customization options** for brand consistency
- **Pricing model** aligned with your production volume
- **Support and updates** for long-term reliability

### Team Training

Your team needs to understand:

- How to prompt AI effectively
- When AI output needs heavy editing vs. light touches
- How to maintain creative standards with AI assistance
- When to skip AI and work traditionally

## Common Challenges

### Quality Consistency

AI output can vary. Address this with:

- Detailed prompt templates
- Style guides for AI usage
- Consistent quality review processes
- Regular prompt refinement based on outputs

### Creative Complacency

Don't let AI make your content generic:

- Use AI for efficiency, not creative direction
- Maintain human oversight of creative decisions
- Encourage team to push beyond AI suggestions
- Continuously evaluate content uniqueness

## Conclusion

AI content generation isn't about replacing creative teams—it's about amplifying their capabilities. The production companies that thrive will be those that find the right balance: using AI to handle volume and routine tasks while preserving human creativity for strategy, storytelling, and quality assurance.

The approximately PKR 240K project with Cobra Production demonstrated that with the right workflow design, AI integration can transform production capacity while maintaining the quality that clients expect.
    `,
  },
  {
    id: 5,
    title: "Building AI-Powered Web Applications: HammerPath Lessons",
    category: "Technology",
    author: "METT Global Team",
    date: "Dec 18, 2025",
    readTime: "9 min read",
    excerpt:
      "Key lessons from developing AI video generation web applications, including user experience design, AI model integration, and building intuitive interfaces for complex technology.",
    image: "/blog-ai-web-apps.jpg",
    content: `
## The Challenge of Democratizing AI

When HammerPath approached us to build an AI video generation platform, they had an ambitious goal: make powerful AI video creation accessible to non-technical users. This PKR 215K project taught us valuable lessons about bridging the gap between complex AI technology and everyday users.

## Understanding User Needs

### The Target User

HammerPath's users weren't AI engineers or video professionals. They were:

- Small business owners creating marketing content
- Content creators without video editing skills
- Marketers needing quick video assets
- Entrepreneurs with ideas but limited technical resources

### Key User Requirements

Through research, we identified what users actually needed:

- **Simplicity** - Complex controls intimidate, not empower
- **Speed** - Results in minutes, not hours
- **Quality** - Output that looks professional
- **Predictability** - Understanding what they'll get before generating
- **Control** - Ability to iterate and refine results

## Architecture Decisions

### Frontend Design Philosophy

For complex technology, the interface must be deceptively simple:

- **Progressive Disclosure** - Show basic options first, advanced settings on demand
- **Guided Workflows** - Step users through the creation process
- **Preview Systems** - Show likely results before expensive AI generation
- **Clear Feedback** - Communicate what's happening during generation

### Backend Considerations

AI video generation is resource-intensive:

- **Queue Management** - Handle multiple generation requests fairly
- **Progress Tracking** - Keep users informed during long operations
- **Error Handling** - Graceful failures with actionable recovery options
- **Caching Strategies** - Reduce redundant AI processing where possible

## AI Model Integration

### The Integration Challenge

Working with AI models presents unique challenges:

- **Latency** - Generation takes time; users need feedback
- **Variability** - Same input can produce different outputs
- **Cost Management** - AI processing isn't free
- **Quality Control** - Not all outputs meet standards

### Our Approach

We built abstraction layers that:

- Normalized different AI model interfaces
- Implemented retry logic for failed generations
- Added quality scoring for outputs
- Managed cost through smart generation strategies

## User Experience Patterns That Work

### For AI-Powered Applications

Based on HammerPath, these UX patterns proved effective:

**1. Set Expectations Early**
Before users start, explain:
- What the tool can create
- Typical generation times
- Output quality expectations
- Usage limits or costs

**2. Guide the Process**
Break complex tasks into steps:
- Step 1: Choose your video style
- Step 2: Enter your content
- Step 3: Customize settings
- Step 4: Generate and refine

**3. Manage Wait Times**
During AI processing:
- Show progress indicators (even estimated)
- Provide something to do (preview settings, learn tips)
- Send notifications if users navigate away
- Queue multiple requests clearly

**4. Enable Iteration**
First results rarely perfect:
- Easy "regenerate" with same settings
- Simple parameter adjustments
- History of previous generations
- Comparison between versions

## Technical Lessons Learned

### Performance Optimization

AI applications have unique performance challenges:

- **Lazy Loading** - Don't load AI models until needed
- **Streaming Responses** - Show results as they generate
- **Background Processing** - Don't block the UI
- **Smart Caching** - Store intermediate results

### Error Handling

AI systems fail differently than traditional applications:

- Models can return low-quality results (not errors)
- Processing can timeout on complex requests
- Resource limits can block generation
- External services can be unavailable

Build error handling for all these scenarios.

### Scalability Considerations

AI applications scale differently:

- Compute costs scale with usage, not just users
- Queue management becomes critical at scale
- Resource allocation needs careful planning
- Cost visibility is essential for sustainability

## Lessons for Your AI Project

### Start with the User Problem

Don't build AI features because AI is trendy. Identify:

- What problem does AI solve for your users?
- Is the AI solution better than alternatives?
- Can users understand and trust the AI output?
- Is the value proposition clear?

### Design for Non-Technical Users

If your users aren't AI experts:

- Hide technical complexity behind intuitive interfaces
- Use familiar metaphors for AI concepts
- Provide clear explanations of what the AI does
- Make it easy to get started with defaults

### Plan for AI-Specific Challenges

Budget time and resources for:

- Model testing and selection
- Quality control systems
- Cost management features
- User education and onboarding

## Conclusion

Building AI-powered web applications is about more than integrating AI models—it's about making complex technology accessible to everyday users. The HammerPath project demonstrated that with thoughtful UX design, robust architecture, and careful attention to user needs, AI tools can truly democratize capabilities that were once available only to specialists.

The key is remembering that technology serves users, not the other way around. Start with user needs, design for simplicity, and let the AI work its magic behind an interface that anyone can use.
    `,
  },
  {
    id: 6,
    title: "Working with International Clients: Netherlands & Beyond",
    category: "Business",
    author: "METT Global Team",
    date: "Dec 15, 2025",
    readTime: "6 min read",
    excerpt:
      "Best practices for delivering projects to international clients, from understanding cultural nuances to communication strategies and market-specific requirements.",
    image: "/blog-international-clients.jpg",
    content: `
## Expanding Beyond Borders

Working with international clients opens opportunities but also presents unique challenges. Our projects with clients in the Netherlands (like Yuaia Haircare) and our ongoing work with Smart Learning Arabia have taught us valuable lessons about successful cross-border collaboration.

## Understanding Cultural Differences

### Communication Styles

Different cultures have different expectations:

**Northern European (Netherlands)**
- Direct and explicit communication preferred
- Time-consciousness is crucial
- Written documentation valued
- Formal initially, relaxed once trust established

**Middle Eastern (UAE, Saudi Arabia)**
- Relationship-building important
- Flexibility with timelines expected
- Personal connections matter
- Respect and courtesy emphasized

### Business Practices

Adapt to local norms:

- Meeting scheduling and punctuality expectations
- Decision-making processes and hierarchies
- Contract and payment conventions
- Holiday and working hours awareness

## Communication Strategies

### Overcoming Time Zone Challenges

With clients across different time zones:

- **Establish overlap hours** - Find windows where both parties are available
- **Asynchronous communication** - Use tools that don't require real-time presence
- **Clear documentation** - Written updates reduce need for meetings
- **Recorded demos** - Share video walkthroughs for review anytime

### Language Considerations

Even when working in English:

- Avoid idioms and cultural references
- Be explicit rather than implicit
- Confirm understanding of key points
- Use visual aids where possible

### Tools That Help

We've found these tools valuable for international work:

- **Project management** - Asana, Notion for async collaboration
- **Communication** - Slack, Teams for quick questions
- **Video calls** - Zoom, Google Meet for face-to-face
- **Documentation** - Loom for video updates, Google Docs for shared documents

## Market-Specific Requirements

### Netherlands/EU Considerations

When creating content for European markets:

- **GDPR compliance** - Data privacy is paramount
- **Advertising standards** - Stricter rules on claims
- **Language requirements** - Dutch or English depending on audience
- **Cultural sensitivities** - Different standards for imagery and messaging

### Middle Eastern Markets

For Arabic-language projects like Smart Learning Arabia:

- **Right-to-left interfaces** - Design considerations for Arabic
- **Cultural appropriateness** - Content that respects local values
- **Religious considerations** - Awareness of prayer times, holidays
- **Quality expectations** - High production values expected

## Project Management Adaptations

### Setting Expectations

With international clients, be extra clear about:

- Deliverables and scope
- Timeline and milestones
- Communication frequency
- Review and approval processes
- Payment terms and currency

### Progress Updates

Regular updates build trust across distances:

- Weekly written summaries
- Visual progress demonstrations
- Clear status on each deliverable
- Proactive flagging of issues

### Handling Feedback

International feedback loops require patience:

- Time zones extend response times
- Cultural differences affect feedback style
- Language barriers can cause misunderstandings
- Build extra time into revision cycles

## Building Long-Term Relationships

### The Value of Ongoing Partnerships

Our best international relationships become ongoing partnerships:

- Smart Learning Arabia: Continuous video production at $100/video
- Repeat clients in multiple markets
- Referrals to other international businesses

### How to Build Trust Across Borders

**Deliver on Promises**
International clients can't check on you in person. Reliability is paramount.

**Over-Communicate**
When you can't have casual check-ins, formal communication fills the gap.

**Understand Their Business**
Learn about their market, challenges, and goals beyond your specific project.

**Be Culturally Sensitive**
Small gestures of cultural awareness build significant goodwill.

## Practical Tips

### Before Starting

- Research the client's market and culture
- Establish clear communication channels
- Set expectations for response times
- Agree on tools and platforms

### During the Project

- Send regular, unprompted updates
- Confirm understanding of feedback
- Document everything
- Be flexible with meeting times

### After Delivery

- Follow up on results and satisfaction
- Maintain the relationship
- Ask for referrals
- Stay aware of future needs

## Conclusion

International work expands your opportunities and perspectives. While it requires extra effort in communication and cultural awareness, the relationships built across borders often become the most valuable and enduring.

Our work with clients from the Netherlands, Arabia, and beyond has enriched our capabilities and understanding. The key is approaching each engagement with curiosity, respect, and a commitment to understanding your client's world as well as your own.
    `,
  },
]

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id.toString(),
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params
  const post = blogPosts.find((p) => p.id === parseInt(id))

  if (!post) {
    return {
      title: "Post Not Found | METT Global Blog",
    }
  }

  return {
    title: `${post.title} | METT Global Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      authors: [post.author],
    },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const post = blogPosts.find((p) => p.id === parseInt(id))

  if (!post) {
    notFound()
  }

  return (
    <main className="relative min-h-screen overflow-hidden noise-overlay">
      <AnimatedBackground />
      <Navigation />

      {/* Hero */}
      <section className="relative pt-28 sm:pt-32 md:pt-40 pb-8 sm:pb-12 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-primary/10 rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 text-[10px] font-medium rounded-full bg-primary/20 text-primary mb-4">
              {post.category}
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight leading-tight mb-6">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground mb-8">
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {post.author}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-4">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="relative h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden">
              <img
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <article className="prose prose-invert prose-sm sm:prose-base max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-h2:text-xl prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-lg prose-h3:mt-6 prose-h3:mb-3 prose-p:text-muted-foreground prose-p:leading-relaxed prose-li:text-muted-foreground prose-strong:text-foreground prose-code:bg-white/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-pre:bg-white/5 prose-pre:border prose-pre:border-white/10">
              <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, "<br />") }} />
            </article>

            {/* Share */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Share this article</span>
                <div className="flex items-center gap-3">
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://mettglobal.com/blog/${post.id}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg glass hover:glass-strong transition-all"
                    aria-label="Share on LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(`https://mettglobal.com/blog/${post.id}`)}&text=${encodeURIComponent(post.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg glass hover:glass-strong transition-all"
                    aria-label="Share on Twitter"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-12 p-6 sm:p-8 rounded-xl glass-strong text-center">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Need help with your project?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Our team of experts is ready to help you achieve your goals.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs tracking-wider uppercase rounded-lg bg-primary text-primary-foreground hover:glow-primary transition-all"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
