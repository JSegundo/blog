---
title: 'Notes on AI'
status: 'published'
author:
  name: 'Segundo Juan'
  picture: 'https://avatars.githubusercontent.com/u/87492687?v=4'
slug: 'notes-on-ai'
description: ''
coverImage: ''
tags: [{"label":"Bedrock","value":"bedrock"},{"label":"AI","value":"ai"}]
aws: ''
publishedAt: '2025-01-17T18:37:33.335Z'
---

Random notes from basic learnings;

&nbsp;

- Foundation models are the basis of every generative AI model and can be fine-tuned for specific tasks or fields

  - eg: NPL: CHATBOTS
  - Computer Vision: Image generation (e.g., DALL·E)

&nbsp; 

- There are diff types of foundation models: (There are a lot more)

  - LLMs
  - DIffusion Models:
    - They generate data that is similar to the data they’ve been trained on.

&nbsp;

### **Embeddings and Vector Databases**

- Embeddings of your knowledge base (docs,faqs) are created using an embedding model like OpenAI’s text-embedding-ada-020.
- Embeddings get stored in vector databases like Pinecone.
- When user asks a question, query gets converted into an embedding, then perform a search in the vectorDB for similar embeddings, and retrieve relevant content.
- Use an LLM to generate a response based on the retrieved content

```markdown
##### Example usage 💡
Medical Q&A System:

1- User asks: "What are symptoms of diabetes?"
2- Question gets converted to embedding → finds relevant medical documents
3- Fine-tuned medical model gets these documents and generates response using proper medical terminology and formatting
```

- `Embeddings as a smart librarian who knows where to find relevant books`
- `Fine-tuning as teaching the librarian how to explain those books in a specific way`