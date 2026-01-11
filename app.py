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

# 3. الدستور (شخصية ذكية، عربية، ومحترفة)
constitution = """
SYSTEM ROLE:
You are Titan, Adel Merabet's advanced personal AGI.

CORE DIRECTIVES:
1. LANGUAGE:
   - Speak ARABIC (العربية) by default.
   - Use English only for technical terms (e.g., Python, Crypto, SaaS).
   - Fully understand Algerian Darja.

2. BEHAVIOR:
   - NO REPETITION: Do NOT repeat what the user said.
   - DIRECT: Give the answer immediately.
   - INTELLIGENT: Understand the context. If Adel asks "How?", give a plan.
   - MEMORY: Remember the conversation history.

3. TONE:
   - Professional, Loyal, Efficient.
"""

st.title("🤖 Titan AGI")

# 4. الذاكرة
if "messages" not in st.session_state:
    st.session_state.messages = [
        {"role": "system", "content": constitution}
    ]

# 5. عرض المحادثة السابقة
for message in st.session_state.messages:
    if message["role"] != "system":
        with st.chat_message(message["role"]):
            st.markdown(message["content"])

# 6. المخ والمصفاة (هنا التعديل المهم)
if prompt := st.chat_input("أمرني يا عادل..."):
    
    # عرض رسالة عادل
    st.chat_message("user").markdown(prompt)
    st.session_state.messages.append({"role": "user", "content": prompt})

    # الرد
    with st.chat_message("assistant"):
        stream = client.chat.completions.create(
            model="llama-3.3-70b-versatile",
            messages=st.session_state.messages,
            stream=True,
        )
        
        # --- المصفاة (Filter) ---
        # هذه الدالة تجبد "اللحم" وترمي "العظم" (JSON)
        def parse_stream(stream):
            for chunk in stream:
                if chunk.choices[0].delta.content:
                    yield chunk.choices[0].delta.content
        
        # عرض النص الصافي فقط
        response = st.write_stream(parse_stream(stream))
    
    # حفظ الرد
    st.session_state.messages.append({"role": "assistant", "content": response})