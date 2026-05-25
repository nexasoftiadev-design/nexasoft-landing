/**
 * PackageItem Model
 * Represents a commercial package with bundled services.
 */
export interface PackageItem {
  id: string;
  name: string;
  description: string;
  features: string[];
  highlighted: boolean;
  targetAudience?: string;
  ctaText: string;
}
