# Manage landing page

My solution to the [Manage landing page](https://www.frontendmentor.io/challenges/manage-landing-page-SLXqC6P5)
challenge on Frontend Mentor.

![](./screenshot.webp)

- Live: https://manage-landing-page.abdelrhman-ahmed8881.workers.dev
- Code: https://github.com/MrBlackvanta/manage-landing-page

## Built with

- Next.js 16, App Router
- React 19 and TypeScript
- Tailwind CSS v4
- Embla Carousel for the testimonial slider

## Notes

### Colour

Half the design's text pairings fail AA when measured against the backdrop they actually sit
on, decorative shapes included. What moved:

|                   | design    | built      | contrast     |
| ----------------- | --------- | ---------- | ------------ |
| Body copy         | `#9196A8` | `#686E88`  | 2.9 to 4.53  |
| Brand red         | `#F3603C` | `#DE370E`  | 3.0 to 4.51  |
| Button hover fill | `#F98F75` | `#C0300C`  | 2.13 to 5.72 |
| Input placeholder | `#8D8D8D` | `#767676`  | 3.32 to 4.54 |
| Error text        | `#F33C3C` | two tokens | 3.80 to 4.5  |

**The pale shape governs the body colour.** Solving for white and the testimonial card alone
allows a lighter grey, which then fails over the `#FFF0EC` shape the mobile hero paragraph
crosses.

The error red needs two tokens because no single value works: on white it has to sit below a
luminance of 0.183, and on the dark panel above 0.241.

Darkening the brand costs the hover direction. The new fill is already at the lightness
ceiling for white text, so hover darkens where the design lightens. The button glow keeps its
original relationship to the fill and moves with it.

### Type

**The design file is set in "Be Vietnam", not "Be Vietnam Pro".** Different family, wider
metrics. The hero's three-line break needs 458px where the design's text frame is 445, so the
heading column widens and the gutter beside it narrows to compensate, keeping the artwork on
its edge. Line height is affected too: `leading: normal` measures about 1.45 in the file and
Be Vietnam Pro's own normal is 1.27, so anything depending on box height carries an explicit
line height.

### Layout

The design has no tablet frame. One structural breakpoint at 1024, with prose capped at 32rem
below it so lines don't run to 90 characters at 900px wide. The hero display size is fluid
between 1024 and 1440; pinned at 56px it wraps to five lines at 1024.

Where the design disagrees with itself, I normalised: mobile section headings drawn at two
sizes for the same role ship at one, the three mobile feature bars all ship as pills ending at
the viewport edge, the footer and CTA button move to the content edge every other section
uses, and the header logo is centred in its row. Mobile gutters run anywhere from 16 to 33.5px
in the file; everything uses 24 except the feature block, which keeps 16 because that's the
gutter that gives its paragraphs the design's four lines.

Two places that won't pixel-match: the mobile section intro is hard-wrapped to four lines in
the design and wraps naturally to three, so everything below sits about 21px higher; and the
footer is taller because it carries the attribution line.

### The slider

**It loops and drags, neither of which the design specifies.** It runs on Embla, which was
worth the 5KB. My first pass used CSS scroll-snap and had to reposition `scrollLeft` to fake
the loop, and the snap engine fought every correction: the wrap shook on touch and jumped from
a dot press. Embla moves slides with transforms rather than scroll offsets, so there's nothing
to fight. It also keeps exactly four slides in the DOM instead of cloning them, so the
carousel reads as four items to assistive tech with no `aria-hidden` copies.

Slide spacing is padding rather than `gap`, because Embla measures loop offsets from slide
widths and a gap leaves a short step beside a wrapped slide.

**The dots sit further apart than the design draws them.** 7px dots on a 12px pitch fails
2.5.8, and there's no arrangement of 7px dots 12px apart that passes. They keep their 7px
appearance inside 24px buttons, so the row is 96px wide rather than 43.

### Menu and motion

**The menu button is one icon, not two.** Three bars rotate and converge into the X. That
rules out `<dialog showModal()>`, whose modal inertness would make the button unclickable
while the menu is open, so it's a disclosure with `aria-expanded` and `aria-controls`, and
Escape, scrim-click, scroll lock and focus return wired by hand. Focus return matters and no
automated audit catches it: all three close paths leave focus on a link that's about to become
hidden, so the next Tab would restart from the top of the document.

**Section reveals are transform-only, no fade.** They're CSS scroll-driven animations gated
behind `prefers-reduced-motion` and an `@supports` check. Fading was the obvious choice and
the wrong one: auditing tools scroll the page and sample elements partway through the fade,
reading half-opacity text as a contrast failure. It cost three false errors and took
Accessibility to 92. Sliding without fading keeps both the motion and the score. The hero is
excluded since it holds the LCP.

The avatars aren't the photographs supplied with the challenge, so the testimonial row won't
match the design JPGs.

## Author

- [LinkedIn](https://www.linkedin.com/in/abdelrhman-vanta/)
- [UpWork](https://www.upwork.com/freelancers/mrblackvanta)
- [Frontend Mentor](https://www.frontendmentor.io/profile/MrBlackvanta)
