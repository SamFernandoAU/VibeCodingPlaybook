---
layout: default
title: "Best Practices"
order: 3.2
parent: "03-do-it-right"
---

# Best Practices

## ✅ How to Vibe Code Effectively

To harness the power of AI in coding while mitigating risks, follow these essential best practices:

<div class="best-practices-list">
    <div class="practice-item">
        <h3>1. Spec Driven Prompts</h3>
        <p>Break requirements into smaller specs and requirement documents, then use these detailed specs directly in your prompts. This ensures clarity and reduces ambiguity for the AI.</p>
    </div>
    <div class="practice-item">
        <h3>2. AI for Non-Coding Tasks</h3>
        <p>Leverage AI beyond just code generation. Use it for code explaining, identifying refactoring opportunities, generating documentation, or even writing test cases.</p>
    </div>
    <div class="practice-item">
        <h3>3. Modularise the Code</h3>
        <p>Modularise your code base into smaller, manageable segments. Large Language Models (LLMs) struggle with large codebases and high Lines of Code (LoC), making modularity crucial for AI effectiveness.</p>
    </div>
    <div class="practice-item">
        <h3>4. Pick the Model That Works for the Task</h3>
        <p>Different AI models excel at different tasks. Use the right model for the specific task you want AI to perform, whether it's code generation, summarisation, or complex problem-solving.</p>
    </div>
    <div class="practice-item">
        <h3>5. Fail Safe Mechanisms</h3>
        <p>Implement robust fail-safe mechanisms. Have clear ways of controlling and shutting down AI agent workflows, enable comprehensive logs for auditing, and establish rollback controls to revert changes if necessary.</p>
    </div>
    <div class="practice-item">
        <h3>6. Avoid Building Entire Features</h3>
        <p>Focus AI on repeated code, utility functions, helper functions, reusable code, templates, and CRUD functions. Let humans handle complex feature orchestration.</p>
    </div>
    <div class="practice-item">
        <h3>7. Keep the Humans in the Loop</h3>
        <p>Integrate human oversight through code reviews, security scans, CICD processes, pipeline changes, and command execution. AI assists, humans approve.</p>
    </div>
    <div class="practice-item">
        <h3>8. Craft Instructions Unique to You</h3>
        <p>Develop specific instruction files tailored to your tech stack, application architecture, and software standards. This ensures compliant and relevant outputs.</p>
    </div>
    <div class="practice-item">
        <h3>9. Use Scanning Features</h3>
        <p>Actively scan AI-generated code for leaked secrets, potential vulnerabilities, and outdated or insecure dependencies. Security is paramount.</p>
    </div>
    <div class="practice-item">
        <h3>10. Secure Prompting Patterns</h3>
        <p>Train both developers and AI (via explicit instructions) to use secure prompting techniques. This guides AI to generate compliant and safe outputs.</p>
    </div>
    <div class="practice-item">
        <h3>11. Plan Before Making Changes</h3>
        <p>Always use 'ask' or 'chat' mode first to clarify the plan of attack with the AI. Only then, use 'agent' mode for execution to ensure alignment and control.</p>
    </div>
</div>

---

## 🎯 Core Best Practices

### **1. Spec Driven Prompts**
Break requirements into smaller specs and requirement documents, then use these detailed specs directly in your prompts. This ensures clarity and reduces ambiguity for the AI.

### **2. AI for Non-Coding Tasks**
Leverage AI beyond just code generation. Use it for code explaining, identifying refactoring opportunities, generating documentation, or even writing test cases.

### **3. Modularise the Code**
Modularise your code base into smaller, manageable segments. Large Language Models (LLMs) struggle with large codebases and high Lines of Code (LoC), making modularity crucial for AI effectiveness.

### **4. Pick the Model That Works for the Task**
Different AI models excel at different tasks. Use the right model for the specific task you want AI to perform, whether it's code generation, summarisation, or complex problem-solving.

### **5. Fail Safe Mechanisms**
Implement robust fail-safe mechanisms. Have clear ways of controlling and shutting down AI agent workflows, enable comprehensive logs for auditing, and establish rollback controls to revert changes if necessary.

## 🚀 Advanced Best Practices

### **Avoid Building Entire Features**
Focus AI on repeated code, utility functions, helper functions, reusable code, templates, and CRUD functions. Let humans handle complex feature orchestration.

### **Keep the Humans in the Loop**
Integrate human oversight through code reviews, security scans, CICD processes, pipeline changes, and command execution. AI assists, humans approve.

### **Craft Instructions Unique to You**
Develop specific instruction files tailored to your tech stack, application architecture, and software standards. This ensures compliant and relevant outputs.

### **Use Scanning Features**
Actively scan AI-generated code for leaked secrets, potential vulnerabilities, and outdated or insecure dependencies. Security is paramount.

### **Secure Prompting Patterns**
Train both developers and AI (via explicit instructions) to use secure prompting techniques. This guides AI to generate compliant and safe outputs.

### **Plan Before Making Changes**
Always use 'ask' or 'chat' mode first to clarify the plan of attack with the AI. Only then, use 'agent' mode for execution to ensure alignment and control.

---

*These practices ensure you get the most out of AI while maintaining control and quality.*

---

*Use the arrow keys to navigate between slides*
