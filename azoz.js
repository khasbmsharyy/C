
function applyCustomChanges() {
    const username = "تـٌـٌٌــِـِِـِِِـِِـِـآلُاـآ ➢ 𝓽𝓪𝓵𝓪"; // اسم العضوية المطلوبة

    // 1️⃣ الشات
    document.querySelectorAll(".uzr").forEach(function(u) {
        let nameElement = u.querySelector(".u-topic");
        if (nameElement && nameElement.textContent.includes(username)) {
            u.classList.add("moon1");
            let flag = u.querySelector(".co.ico, .di3 img, .fl, .u-co img");
            if (flag && flag.src !== "https://aqfeet.com/sico/1773023138381.gif") {
                flag.src = "https://aqfeet.com/sico/1773023138381.gif";
            }

            // تبديل كلمة اليمن بـ بنت كيوت داخل الشات
            u.querySelectorAll(".u-co").forEach(function(el){
                if(el.innerText.includes("اليمن")){
                    if(el.childNodes.length>0) el.childNodes[0].nodeValue = "بنت كيوت ";
                }
            });

            // 🔹 هنا CSS خاص بالعضوية في الشات
            let style = document.createElement("style");
            style.innerHTML = `
  

#users .uzr.moon1 .ustat {
width: 15px !important;
border-radius: 15px 0px 15px 0px !important;
height: 15px !important;
min-height: 0% !important;
z-index: 0 !important;
}




            `;
            document.head.appendChild(style);
        }
    });

    // 2️⃣ البروفايل
    let profileName = document.querySelector("#upro .upro-display-name");
    if(profileName && profileName.textContent.includes("تـٌـٌٌــِـِِـِِِـِِـِـآلُاـآ ➢ 𝓽𝓪𝓵𝓪")) { // تأكد من العضو نفسه
        // تغيير العلم
        document.querySelectorAll("#upro .u-co img").forEach(function(img){
            if(img.src !== "https://aqfeet.com/sico/1773023138381.gif"){
                img.src = "https://aqfeet.com/sico/1773023138381.gif";
            }
        });

        // تغيير النص داخل البروفايل
        document.querySelectorAll("#upro .u-co").forEach(function(el){
            if(el.innerText.includes("اليمن")){
                if(el.childNodes.length>0) el.childNodes[0].nodeValue = "بنت كيوت ";
            }
        });

        // 🔹 هنا CSS خاص بالعضوية في البروفايل
        let profileStyle = document.createElement("style");
        profileStyle.innerHTML = `
            #upro .upro-display-name {
                color: deeppink; 
                font-weight: bold; 
                text-shadow: 0 0 5px #ff69b4;
            }
        `;
        document.head.appendChild(profileStyle);
    }
}

// 3️⃣ المراقبة
const observer = new MutationObserver(applyCustomChanges);
observer.observe(document.body, { childList: true, subtree: true });

// 4️⃣ interval خفيف للتطبيق فوراً
setInterval(applyCustomChanges, 500);
applyCustomChanges();
