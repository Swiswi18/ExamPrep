/**
 * Cleans and splits raw text into individual topics.
 * @param rawText - Long string from Perplexity or PDF summary.
 * @returns Array of cleaned topics.
 */
export function extractTopics(rawText: string): string[] {
    return rawText
      .split(/[\n•\-–—]/) // Split by bullet points or lines
      .map(topic => topic.trim())
      .filter(topic => topic.length > 4) // Remove short/noisy entries
  }
  
  
  /**
   * Organizes topics into clusters based on keywords/domains.
   * You can customize this dictionary for other exams.
   * @param topics - List of topic strings.
   * @returns Record<string, string[]> clusters keyed by domain.
   */
  export function clusterTopics(topics: string[]): Record<string, string[]> {
    const domains: Record<string, string[]> = {
      Identity: [],
      Security: [],
      Compliance: [],
      Governance: [],
      Misc: [],
    }
  
    for (const topic of topics) {
      const lower = topic.toLowerCase()
  
      if (lower.includes('identity') || lower.includes('aad')) {
        domains.Identity.push(topic)
      } else if (lower.includes('security') || lower.includes('attack') || lower.includes('threat')) {
        domains.Security.push(topic)
      } else if (lower.includes('compliance') || lower.includes('regulation') || lower.includes('audit')) {
        domains.Compliance.push(topic)
      } else if (lower.includes('governance') || lower.includes('policy') || lower.includes('roles')) {
        domains.Governance.push(topic)
      } else {
        domains.Misc.push(topic)
      }
    }
  
    return domains
  }
  
  
  /**
   * Converts clustered topics into a flat array for MyMap entry.
   * @param clusters - Record of domains to topics
   * @returns Array of strings formatted for MyMap.ai
   */
  export function flattenClustersForMyMap(clusters: Record<string, string[]>): string[] {
    const result: string[] = []
  
    for (const [domain, topics] of Object.entries(clusters)) {
      topics.forEach(topic => {
        result.push(`${domain}: ${topic}`)
      })
    }
  
    return result
  }
  