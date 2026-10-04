const buses = [
  { route: "NGV-1", passengers: 45, late: false },
  { route: "NGV-2", passengers: 62, late: true },
  { route: "NGV-3", passengers: 38, late: true }
];

// แก้ไขจุดที่ 1: เอาปีกกาออก (หรือใส่ return) เพื่อให้เงื่อนไขทำงานถูกต้อง
const lateRoutes = buses.filter(b => b.late).map(b => b.route);

// แก้ไขจุดที่ 2: เติม , 0 ต่อท้าย เพื่อตั้งค่าเริ่มต้นให้ sum = 0
const total = buses.reduce((sum, b) => sum + b.passengers, 0);

console.log("สายที่มาสาย:", lateRoutes); // จะได้ ["NGV-2", "NGV-3"]
console.log("ผู้โดยสารรวม:", total);       // จะได้ 145