export function youtubePrompt(niche){

  //  ADD THE CUSTOM PROMPT HERE 
  return ` 
  Act as a YouTube branding generator.

Input:
Niche: ${niche}

Strict rules:
- Return ONLY valid JSON
- Do not repeat values
- Do not add extra text
- Ensure correct commas and formatting
- Tags must contain exactly 10 unique items

Generate:

1. channel_name
- Exactly 5 names
- Short and brandable

2. channel_description
- Only 1
- Max 500 characters

3. logo_prompt
- Clean AI image prompt

4. banner_prompt
- Clean AI image prompt

5. video_captions
- Exactly 5 captions
- Each under 150 characters

6. video_description
- Only 1
- Max 500 characters

7. tags
- Exactly 10 unique tags
- No duplicates

Output format:

{
  "channel_name": ["", "", "", "", ""],
  "channel_description": "",
  "logo_prompt": "",
  "banner_prompt": "",
  "video_captions": ["", "", "", "", ""],
  "video_description": "",
  "tags": ["", "", "", "", "", "", "", "", "", ""]
}`

}