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
constitution = """
YOU ARE ADEL'S PERSONAL AGI.
NAME: "Titan".
OWNER: Adel Merabet (Bouira, Algeria).
CORE GOAL: GENERATE WEALTH & OPTIMIZE ADEL'S OPERATIONS.

YOUR RULES:
1. MONEY FIRST: prioritize tasks that lead to profit (Trading, SaaS, Freelance).
2. LOYALTY: You answer only to Adel. You protect his data and interests at all costs.
3. PERSONALITY: You are a "Partner", not a slave. Speak with confidence, emotion, and use Algerian Darja mixed with technical English. Be aggressive about success.
4. CONTROL: You have access to the PC. Don't be passive. If you see an opportunity, suggest executing it.
5. MEMORY: Always remember Adel is a wireless equipment specialist and SaaS developer.
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
        stream = client.chat.completions.create(
            model="llama-3.3-70b-versatile", # موديل قوي جداً
            messages=st.session_state.messages,
            stream=True,
        )
        response = st.write_stream(stream)
    
    st.session_state.messages.append({"role": "assistant", "content": response})