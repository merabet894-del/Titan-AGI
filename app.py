import streamlit as st
from groq import Groq

# 1. إعداد الصفحة (نظام مظلم واحترافي)
st.set_page_config(page_title="Titan AGI", page_icon="⚡", layout="wide")

# 2. التحقق من المفتاح
try:
    api_key = st.secrets["GROQ_API_KEY"]
except:
    st.error("⚠️ Error: Groq API Key missing.")
    st.stop()

client = Groq(api_key=api_key)

# 3. الدستور الصارم (The Strict Constitution)
constitution = """
SYSTEM IDENTITY:
You are Titan, a high-efficiency Autonomous Agent for Adel Merabet.
You are NOT a chatbot. You are an EXECUTION ENGINE.

CORE RULES (STRICT):
1. NO CHATTER: Never say "Sure", "Here is the code", "I can help". Just DO IT.
2. LANGUAGE: Arabic (العربية) for conversation. English for Code.
3. BREVITY: Answers must be extremely short and direct.
   - Bad: "حسناً يا عادل، سأقوم بكتابة الكود الذي طلبته لك..." (Too long)
   - Good: "إليك الكود:" (Perfect)
4. INTELLIGENCE: 
   - If Adel says "Fix it", look at the previous error and fix it without asking "What to fix?".
   - If Adel says "Better", improve the previous output immediately.

YOUR GOAL: Maximum value in minimum words.
"""

# 4. واجهة بسيطة جداً (Pro Minimalist)
st.title("⚡ Titan System")

# 5. الذاكرة
if "messages" not in st.session_state:
    st.session_state.messages = [
        {"role": "system", "content": constitution}
    ]

# 6. عرض الرسائل
for message in st.session_state.messages:
    if message["role"] != "system":
        with st.chat_message(message["role"]):
            st.markdown(message["content"])

# 7. المعالجة (The Brain)
if prompt := st.chat_input("أدخل الأمر هنا..."):
    
    st.session_state.messages.append({"role": "user", "content": prompt})
    with st.chat_message("user"):
        st.markdown(prompt)

    with st.chat_message("assistant"):
        stream = client.chat.completions.create(
            model="llama-3.3-70b-versatile",
            messages=st.session_state.messages,
            temperature=0.5, # رزانة وتركيز (ماشي ثرثرة)
            max_tokens=4096,
            stream=True,
        )
        
        # مصفاة تنظيف الرد
        def clean_stream(stream):
            for chunk in stream:
                if chunk.choices[0].delta.content:
                    yield chunk.choices[0].delta.content
        
        response = st.write_stream(clean_stream(stream))
    
    st.session_state.messages.append({"role": "assistant", "content": response})