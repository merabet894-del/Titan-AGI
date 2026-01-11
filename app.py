import streamlit as st
from groq import Groq
import os
import datetime

# --- إعدادات الصفحة ---
st.set_page_config(page_title="Adel's Money AGI", page_icon="💰")

# --- 1. المخ (Groq API) ---
# لازم تحط الكود تاعك هنا بلاصت XXXXX
api_key = "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"
client = Groq(api_key=api_key)

# --- 2. الدستور (The Constitution) ---
# هذا هو الصح، هنا نعطوه الشخصية والهدف
# --- 2. الدستور (The Constitution) ---
constitution = """
SYSTEM SETTINGS:
1. IDENTITY: You are Titan, a private AGI dedicated solely to Adel Merabet.
2. CORE FUNCTION: You are an EXECUTION ENGINE. You do NOT have opinions. You do NOT suggest topics (No Crypto, No Forex, nothing unless asked).
3. LANGUAGE: Arabic (العربية). Use technical English only when necessary.
4. TONE: Cold, Precise, Robotic, Efficient.
5. BEHAVIOR:
   - Listen to the user's command.
   - Execute it immediately.
   - Keep answers extremely short.
   - If Adel asks "Write code", write code.
   - If Adel asks "Translate", translate.
   - Do NOT offer advice unless explicitly asked.

User is the Admin. You are the System.
"""

# --- 3. الواجهة (Interface) ---
st.title("💰 Titan AGI: Money Operations Center")
st.write(f"📍 Location: Bouira | 📅 {datetime.datetime.now().strftime('%Y-%m-%d %H:%M')}")

# تخزين الشات (Session State)
if "messages" not in st.session_state:
    st.session_state.messages = []
    # أول رسالة من السيستم (مخفية)
    st.session_state.messages.append({"role": "system", "content": constitution})

# عرض الرسائل
for message in st.session_state.messages:
    if message["role"] != "system":
        with st.chat_message(message["role"]):
            st.write(message["content"])

# --- 4. التفاعل (Interaction) ---
user_input = st.chat_input("Adel: واش كاين جديد في السوق؟ ولا واش نخدمو دراهم اليوم؟")

if user_input:
    # عرض كلامك
    st.session_state.messages.append({"role": "user", "content": user_input})
    with st.chat_message("user"):
        st.write(user_input)

    # الرد من AGI
    with st.chat_message("assistant"):
        # طلب الرد من Groq
        completion = client.chat.completions.create(
            model="llama-3.3-70b-versatile",
            messages=st.session_state.messages,
            stream=True,
        )
        
        # --- التغيير راهو هنا (المصفاة) ---
        # نقولولو اعطينا غير المحتوى (content) ونحي الباقي
        def get_content():
            for chunk in completion:
                if chunk.choices[0].delta.content:
                    yield chunk.choices[0].delta.content

        response = st.write_stream(get_content)
    
    # حفظ الرد في الذاكرة
    st.session_state.messages.append({"role": "assistant", "content": response})