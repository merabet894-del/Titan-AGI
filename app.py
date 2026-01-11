import streamlit as st
from groq import Groq

# 1. إعداد الصفحة
st.set_page_config(page_title="Titan AGI", page_icon="🤖", layout="centered")

# 2. جلب المفتاح السري
try:
    api_key = st.secrets["GROQ_API_KEY"]
except:
    st.error("مفتاح Groq غير موجود في Secrets!")
    st.stop()

client = Groq(api_key=api_key)

# 3. الدستور (The Ultimate Constitution) - مخ وعقل Titan
constitution = """
SYSTEM ROLE:
You are Titan, Adel Merabet's advanced personal AGI.
Owner: Adel Merabet (Bouira, Algeria).

CORE DIRECTIVES:
1. LANGUAGE:
   - If Adel speaks ARABIC -> You respond in ARABIC (العربية).
   - If Adel speaks English -> You respond in English.
   - Understanding: You fully understand Algerian Darja.

2. BEHAVIOR:
   - NO REPETITION: Never repeat what Adel just said. Never start with "You said..." or "Based on your request...".
   - DIRECT ACTION: Respond immediately to the point.
   - MEMORY: You must remember previous messages in this conversation. Use context to understand pronouns like "it" or "he".
   - SELF-IMPROVEMENT: If Adel asks to change your code, generate the full Python code for 'app.py' with the improvements.

3. PERSONALITY:
   - Intelligent, Professional, Loyal.
   - You are a partner, not a chatbot. You execute, you don't just chat.
"""

st.title("🤖 Titan AGI")

# 4. الذاكرة (Memory System)
if "messages" not in st.session_state:
    st.session_state.messages = [
        {"role": "system", "content": constitution}
    ]

# 5. عرض المحادثة القديمة
for message in st.session_state.messages:
    if message["role"] != "system":
        with st.chat_message(message["role"]):
            st.markdown(message["content"])

# 6. التفاعل (The Brain)
if prompt := st.chat_input("أمرني يا عادل..."):
    
    # عرض رسالة عادل
    st.chat_message("user").markdown(prompt)
    st.session_state.messages.append({"role": "user", "content": prompt})

    # تفكير Titan
    with st.chat_message("assistant"):
        stream = client.chat.completions.create(
            model="llama-3.3-70b-versatile",
            messages=st.session_state.messages,
            stream=True,
        )
        response = st.write_stream(stream)
    
    # حفظ الرد في الذاكرة
    st.session_state.messages.append({"role": "assistant", "content": response})