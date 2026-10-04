// ข้อมูลจำลอง (Mock Data) คลิปออกกำลังกายระดับต่างๆ
const workoutVideos = [
  { title: "ยืดเหยียดบนเตียง (Stretching)", duration: 10, intensity: "Low" },
  { title: "โยคะก่อนนอน (Yoga)", duration: 15, intensity: "Low" },
  { title: "บอดี้เวทระดับกลาง (Bodyweight)", duration: 20, intensity: "Medium" },
  { title: "พิลาทิสกระชับสัดส่วน (Pilates)", duration: 30, intensity: "Medium" },
  { title: "คาร์ดิโอเผาผลาญไขมัน (HIIT)", duration: 25, intensity: "High" },
  { title: "เต้นแอโรบิคจัดเต็ม (Dance)", duration: 45, intensity: "High" }
];

// ฟังก์ชันแนะนำคลิปตามระดับแบตเตอรี่ที่เหลือ
const recommendWorkout = (battery, videos) => {
  // Edge Case: ถ้าแบตเตอรี่ไม่อยู่ในช่วง 0-100 ให้คืนค่า Array ว่าง
  if (typeof battery !== 'number' || battery < 0 || battery > 100) {
    return [];
  }

  // กำหนดระดับความเข้มข้นตามเปอร์เซ็นต์แบตเตอรี่
  let targetIntensity = "";
  if (battery <= 30) {
    targetIntensity = "Low";
  } else if (battery <= 70) {
    targetIntensity = "Medium";
  } else {
    targetIntensity = "High";
  }

  // กรองคลิปที่ระดับความเข้มข้นตรงกับแบตเตอรี่
  return videos.filter(video => video.intensity === targetIntensity);
};

console.log("--- เริ่มการทดสอบระบบแนะนำคลิปออกกำลังกาย ---");

// กรณีที่ 1: วันนี้เหนื่อยมาก แบตเหลือแค่ 15% (ควรได้คลิป Low)
console.log("\nกรณี 1: แบตเหลือ 15%");
console.log(recommendWorkout(15, workoutVideos)); 

// กรณีที่ 2: วันนี้พลังล้นเหลือ แบต 85% (ควรได้คลิป High)
console.log("\nกรณี 2: แบตเหลือ 85%");
console.log(recommendWorkout(85, workoutVideos)); 

// กรณีที่ 3 (Edge Case): กรอกข้อมูลผิดพลาด แบต 150% หรือติดลบ (ควรได้ Array ว่าง)
console.log("\nกรณี 3: แบต 150% (Edge Case)");
console.log(recommendWorkout(150, workoutVideos));