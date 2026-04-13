# Universal Sof Foyda Kalkulyatori - Dizayn Brainstorming

## Umumiy Talablar
- Zamonaviy, toza, minimalist va sodda
- Ochiq va yorug' ranglardan foydalan (oq, och kulrang, mayin pastel ranglar)
- Ko'zni toliqtirmaydigan
- Input va Natija qismlarini kartochkalar bilan ajratish

---

## Yonalish 1: "Neomorfizm + Soft Minimalism"
**Ehtimollik: 0.08**

### Design Movement
Neomorfik dizayn + Soft UI - yumshoq, soyali, 3D effektli minimal interfeys

### Core Principles
1. **Yumshoq Soyalar**: Har bir element yumshoq, qalin soyalar bilan ko'tarilgan bo'ladi
2. **Monokrom Pastel**: Asosan och kulrang va oq ranglar, minimal aksent ranglar
3. **Birlashtirilgan Elementlar**: Kartochkalar va input maydonlari bir-biriga yaqin, lekin soyalar bilan ajratilgan
4. **Organik Shakllar**: Chuqur burchakli burchaklar emas, balki yumshoq radius

### Color Philosophy
- **Asosiy**: Oq fon (#FFFFFF)
- **Ikkinchi**: Och kulrang (#F5F5F5, #F0F0F0)
- **Aksent**: Mayin mavi (#E3F2FD) yoki mayin yashil (#E8F5E9)
- **Text**: Qora (#1A1A1A) yoki och kulrang (#333333)
- **Soyalar**: Yumshoq, qalin soyalar - hech qanday qora soyalar emas

### Layout Paradigm
- **Asimetrik Ustun**: Input kartochkalari chap tomonda, natija kartochkalari o'ng tomonda
- **Kaskad Tartib**: Kartochkalar vertikal kaskadda, lekin har biri ozgina offset bilan
- **Dinamik Spacing**: Kartochkalar orasida o'zgaruvchan bo'sh joy

### Signature Elements
1. **Yumshoq Kartochkalar**: Har bir input/natija qismi yumshoq soyalar bilan ko'tarilgan kartochka
2. **Slider Elementlari**: Foiz inputlari uchun zamonaviy sliderlar, minimal dizayn
3. **Animatsiyali Raqamlar**: Natija raqamlari o'zgarishida kichik animatsiyalar

### Interaction Philosophy
- Hover vaqtida kartochkalar ozgina ko'tariladi (shadow o'zgaradi)
- Input o'zgarishida real-time yangilash, lekin hech qanday flashlash yo'q
- Smooth transitions - barcha o'zgarishlar 300ms davomida

### Animation
- **Kirish**: Kartochkalar yuqoridan pastga, 0.5s davomida fade-in
- **Hover**: Kartochka 4px ko'tariladi, shadow intensivligi o'zgaradi
- **Input Change**: Raqamlar 200ms davomida slide-in animatsiyasi bilan yangilandi
- **Focus**: Input maydoniga fokus vaqtida, ring color o'zgaradi (subtle)

### Typography System
- **Display Font**: "Poppins" (bold, 600-700 weight) - sarlavhalar uchun
- **Body Font**: "Inter" (regular, 400-500 weight) - asosiy text
- **Hierarchy**: 
  - Sarlavhalar: Poppins 28px, weight 700
  - Kartochka sarlavhalari: Poppins 16px, weight 600
  - Label: Inter 14px, weight 500
  - Raqamlar: Poppins 24px, weight 600

---

## Yonalish 2: "Glasmorphism + Neon Accents"
**Ehtimollik: 0.07**

### Design Movement
Glasmorphism (shisha effekti) + Neon aksent ranglar - zamonaviy, texnologik, futuristik

### Core Principles
1. **Shisha Effekti**: Kartochkalar yarim shaffof, blur background bilan
2. **Neon Aksent**: Mayin neon mavi yoki sirtqi yashil aksent ranglar
3. **Qorong'i Fon**: Toza oq emas, balki sehr och kulrang yoki mayin lavanda
4. **Metallik Elementlar**: Gradient va blur bilan metallik effekt

### Color Philosophy
- **Asosiy Fon**: Sehr och kulrang (#FAFAFA) yoki mayin lavanda (#F3F0FF)
- **Kartochka**: Yarim shaffof oq (rgba(255,255,255,0.7)) blur bilan
- **Aksent**: Neon mavi (#00D4FF) yoki sirtqi yashil (#00FF88)
- **Text**: Qora (#0A0A0A)
- **Border**: Neon aksent, 1px

### Layout Paradigm
- **Markaziy Grid**: 2x2 yoki 3x3 grid layout
- **Floating Cards**: Kartochkalar "suzuvchi" effekti bilan
- **Dinamik Positioning**: Kartochkalar ozgina hover vaqtida harakat qiladi

### Signature Elements
1. **Shisha Kartochkalar**: Yarim shaffof, blur background bilan
2. **Neon Border**: Kartochka chegaralari neon rangda
3. **Glow Effect**: Aksent elementlari etrafida subtle glow

### Interaction Philosophy
- Hover vaqtida kartochka "suzuvchi" effekti o'zgaradi
- Neon border o'zgaradi, glow intensivligi oshadi
- Input focus vaqtida neon aksent color o'zgaradi

### Animation
- **Kirish**: Kartochkalar scale animatsiyasi bilan (0.8 → 1.0)
- **Hover**: Kartochka ozgina yuqoriga ko'tariladi, glow intensivligi oshadi
- **Input Change**: Raqamlar neon aksent color bilan pulse animatsiyasi
- **Focus**: Input maydoniga fokus vaqtida, neon border glow oshadi

### Typography System
- **Display Font**: "Space Grotesk" (bold, 700 weight) - futuristik
- **Body Font**: "Inter" (regular, 400 weight)
- **Hierarchy**:
  - Sarlavhalar: Space Grotesk 32px, weight 700
  - Kartochka sarlavhalari: Space Grotesk 18px, weight 700
  - Label: Inter 13px, weight 400
  - Raqamlar: Space Grotesk 26px, weight 700

---

## Yonalish 3: "Warm Minimalism + Organic Shapes"
**Ehtimollik: 0.09**

### Design Movement
Issiq minimalizm + Organik shakllar - zamonaviy, do'stona, natural

### Core Principles
1. **Issiq Ranglar**: Oq, och bej, mayin apelsin, mayin qizil
2. **Organik Shakllar**: Kartochkalar va elementlar organik, burchaksiz shakllar
3. **Natural Spacing**: Tabiat-inspired spacing va layout
4. **Yumshoq Gradientlar**: Issiq ranglarning yumshoq gradientlari

### Color Philosophy
- **Asosiy Fon**: Oq (#FFFFFF) yoki sehr och bej (#FFFBF7)
- **Kartochka**: Sehr och apelsin (#FFF5E6) yoki sehr och qizil (#FFE8E0)
- **Aksent**: Issiq apelsin (#FF9F43) yoki issiq qizil (#FF6B6B)
- **Text**: Qora (#1A1A1A) yoki issiq qora (#2C2416)
- **Gradient**: Apelsin → Qizil gradient

### Layout Paradigm
- **Asimetrik Kaskad**: Kartochkalar asimetrik kaskadda, natural tartibda
- **Breathing Space**: Ko'p bo'sh joy, natural spacing
- **Diagonal Accents**: Diagonallar va asimetrik elementlar

### Signature Elements
1. **Organik Kartochkalar**: Kartochkalar burchaksiz, organik shakllar
2. **Gradient Aksent**: Issiq gradient aksent elementlar
3. **Dot Patterns**: Kichik dot patternlari background-da

### Interaction Philosophy
- Hover vaqtida kartochka ozgina harakat qiladi (translate)
- Gradient aksent o'zgaradi
- Natural, smooth transitions

### Animation
- **Kirish**: Kartochkalar vertikal scroll bilan fade-in
- **Hover**: Kartochka ozgina harakat qiladi (translate), gradient o'zgaradi
- **Input Change**: Raqamlar smooth slide-in animatsiyasi
- **Focus**: Input maydoniga fokus vaqtida, gradient aksent oshadi

### Typography System
- **Display Font**: "Playfair Display" (bold, 700 weight) - elegant
- **Body Font**: "Lato" (regular, 400 weight) - natural
- **Hierarchy**:
  - Sarlavhalar: Playfair Display 36px, weight 700
  - Kartochka sarlavhalari: Playfair Display 20px, weight 700
  - Label: Lato 14px, weight 400
  - Raqamlar: Playfair Display 28px, weight 700

---

## Tanlangan Yonalish: **Yonalish 1 - Neomorfizm + Soft Minimalism**

Tanlash sababi:
- Zamonaviy va professional ko'rinish
- Soft soyalar bilan yumshoq, do'stona interfeys
- Input va natija qismlarini kartochkalar bilan ajratish uchun ideal
- Minimalist, lekin zamonaviy
- Ochiq va yorug' ranglar - ko'zni toliqtirmaydigan
- Real-time hisoblashni yumshoq animatsiyalar bilan ko'rsatish uchun ideal
