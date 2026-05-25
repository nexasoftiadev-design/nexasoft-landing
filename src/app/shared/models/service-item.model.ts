/**
 * ServiceItem Model
 * Represents a service offered by NexaSoft IA displayed in service cards.
 */
export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;           // Emoji or SVG placeholder
  benefits: string[];     // Array of 3 benefit strings
}
