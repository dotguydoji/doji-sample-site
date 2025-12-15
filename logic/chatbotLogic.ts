import { KNOWLEDGE_BASE, FALLBACK_RESPONSE } from '../data/chatbotKnowledgeBase';

/**
 * Processes user input and returns a response from the knowledge base.
 * @param userInput The raw string from the user.
 * @returns A string response from the bot.
 */
export const getBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase().trim();

    // Find the first matching entry in the knowledge base
    for (const entry of KNOWLEDGE_BASE) {
        for (const keyword of entry.keywords) {
            // Check if the user's input includes any of the keywords for this entry
            if (input.includes(keyword)) {
                // If the response is a function, call it with the user's input to get a dynamic response
                if (typeof entry.response === 'function') {
                    return entry.response(input);
                }
                // Otherwise, return the static string response
                return entry.response;
            }
        }
    }

    // If no keywords match after checking the entire knowledge base, return the fallback response
    return FALLBACK_RESPONSE;
};
