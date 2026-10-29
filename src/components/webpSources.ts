// Images ship as WebP at two widths, named `${base}-${width}.webp`.
export function webpSources(base: string, widths: readonly [number, number]) {
  return {
    src: `${base}-${widths[1]}.webp`,
    srcSet: widths.map((width) => `${base}-${width}.webp ${width}w`).join(', '),
  }
}

export const phoneWidths = [240, 440] as const
export const browserWidths = [720, 1400] as const
