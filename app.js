const express = require('express');
const app = express();
const path = require('path');

// ตั้งค่า EJS เป็น template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// ตั้งค่า static files
app.use(express.static(path.join(__dirname, 'public')));

// ข้อมูลการออกกำลังกาย
const exercises = [
    {
        id: 1,
        name: 'ท่าสควอช',
        description: 'ยืนแยกขากว้างเท่าช่วงไหล่ ย่อตัวลงเหมือนนั่งเก้าอี้ หลังตรง',
        image: '/images/squat.jpg',
        video: '/videos/squat.mp4',
        reps: '3 เซต x 15 ครั้ง'
    },
    {
        id: 2,
        name: 'ท่าวิดพื้น',
        description: 'วางมือกว้างเท่าช่วงไหล่ ลดตัวลงจนหน้าอกเกือบแตะพื้น แล้วดันตัวขึ้น',
        image: '/images/pushup.jpg',
        video: '/videos/pushup.mp4',
        reps: '3 เซต x 10 ครั้ง'
    },
    {
        id: 3,
        name: 'ท่าครันช์',
        description: 'นอนหงาย ชันเข่า ยกศีรษะและไหล่ขึ้นโดยเกร็งกล้ามเนื้อท้อง',
        image: '/images/crunch.jpg',
        video: '/videos/crunch.mp4',
        reps: '3 เซต x 20 ครั้ง'
    }
];

// Routes
app.get('/', (req, res) => {
    res.render('index', { exercises });
});

app.get('/exercise/:id', (req, res) => {
    const exercise = exercises.find(ex => ex.id === parseInt(req.params.id));
    res.render('exercise', { exercise });
});

// เริ่มเซิร์ฟเวอร์
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});