---
layout: slide
title: "Instruction Examples"
order: 3.4
parent: "03-do-it-right"
---

# Instruction Examples

## 📝 Crafting Effective AI Instructions

To ensure AI agents perform tasks accurately, securely, and in alignment with organisational standards, clear and comprehensive instructions are paramount. These examples illustrate key areas where explicit guidance is essential.

---

## 💡 Key Instruction Areas

<div class="instruction-examples-grid">
    <div class="instruction-card">
        <h3>Project/file/folder structure</h3>
        <p>Document file/folder structure and embed in instructions. This helps AI understand context and placement.</p>
    </div>
    <div class="instruction-card">
        <h3>Architecture principles</h3>
        <p>Document and use architecture principles when prompting. Guide AI to adhere to established design patterns.</p>
    </div>
    <div class="instruction-card">
        <h3>Logging changes</h3>
        <p>Document critical activities and changes done by the AI. Essential for audit trails and debugging.</p>
    </div>
    <div class="instruction-card">
        <h3>Permission controls</h3>
        <p>Ensure no access to production resources, control tasks AI can and can't do. Define clear boundaries for AI operations.</p>
    </div>
    <div class="instruction-card">
        <h3>Ask for clarity if in doubt</h3>
        <p>Ask AI to clarify if something is not clear, ensure prompts are clear in the first place, but if in doubt, should clarify without assuming. Promote explicit communication.</p>
    </div>
    <div class="instruction-card">
        <h3>Role driven workflow</h3>
        <p>Humans guide, AI execute. Clearly define roles and responsibilities in the human-AI collaboration.</p>
    </div>
</div>

---

## 🎯 Instruction Template Example

### **Project Context Instructions**
```
PROJECT STRUCTURE:
- /src/components/ - React components
- /src/utils/ - Utility functions
- /src/api/ - API integration layer
- /src/types/ - TypeScript type definitions

ARCHITECTURE PRINCIPLES:
- Use functional components with hooks
- Implement proper error boundaries
- Follow RESTful API patterns
- Maintain separation of concerns

SECURITY REQUIREMENTS:
- No hardcoded secrets
- Validate all inputs
- Use environment variables for config
- Implement proper authentication
```

### **Task-Specific Instructions**
```
TASK: Create a new user registration component

REQUIREMENTS:
- Form validation for email and password
- Error handling for API failures
- Loading states during submission
- Success feedback to user

CONSTRAINTS:
- Use existing design system components
- Follow accessibility guidelines (WCAG 2.1)
- Mobile-responsive design
- No direct database access
```

---

## 🔧 Best Practices for Instructions

1. **Be Specific**: Include exact file paths, naming conventions, and technical requirements
2. **Set Boundaries**: Clearly define what AI can and cannot do
3. **Provide Context**: Include relevant project information and constraints
4. **Use Examples**: Show expected input/output formats
5. **Iterate and Refine**: Update instructions based on AI performance
6. **Version Control**: Track changes to instruction sets

---

*Clear instructions lead to predictable and compliant AI outputs.*

---

*Use the arrow keys to navigate between slides*
