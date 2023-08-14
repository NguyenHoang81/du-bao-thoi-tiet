import { DateTime } from "luxon";
function Thoigiancity(timezone) {
  if (!timezone) {
    return ""; // Trả về giá trị rỗng nếu không có timezone
  }
    const localTime = Date.now();
    // tính phần bù cục bộ
    const timeOffset=new Date().getTimezoneOffset()*60000;
    // tính thời gian utc với độ lệch
    const utc=localTime+timeOffset;
    // tính múi giờ với biến vị trí
    const vitri=utc+1000*timezone;
    // Convert vị trí thành ngày
    const nd = new Date(vitri);
    function formatthoigian(nd, format) {
      const dt = DateTime.fromJSDate(new Date(nd));
      return dt.setLocale('vi').toFormat(format);
    }
    return formatthoigian(nd, "cccc, dd LLL yyyy' | Location time: 'hh:mm a"); // định dạng thứ, ngày tháng năm
  }
export default Thoigiancity;