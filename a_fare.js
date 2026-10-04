// ฟังก์ชันคำนวณค่าโดยสารรถ NGV ในมหาวิทยาลัย
const calcFare = (distanceKm) => {
  // ตรวจสอบค่าที่ไม่ใช่ตัวเลข หรือค่าน้อยกว่าหรือเท่ากับ 0
  if (typeof distanceKm !== 'number' || Number.isNaN(distanceKm) || distanceKm <= 0) {
    return 0;
  }

  // ปัดเศษกิโลเมตรขึ้นเป็นจำนวนเต็ม
  const totalKm = Math.ceil(distanceKm);

  // 2 กม. แรกคิดราคาเหมา 10 บาท
  if (totalKm <= 2) {
    return 10;
  }

  // กม. ถัดไปคิดเพิ่ม กม. ละ 2 บาท
  return 10 + (totalKm - 2) * 2;
};

// ทดสอบ 3 กรณี
console.log(calcFare(1.5)); // 10 (ปัดขึ้นเป็น 2 กม. -> อยู่ในเกณฑ์ 2 กม. แรก)
console.log(calcFare(2));   // 10 (ตรงเกณฑ์ 2 กม. แรกพอดี)
console.log(calcFare(7.2)); // 22 (ปัดขึ้นเป็น 8 กม. -> 10 + (6 * 2) = 22)
