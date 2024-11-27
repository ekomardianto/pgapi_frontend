export const millisToDate = (value: number) => {
    // Konversi nilai ke string
    const date = new Date(value);
  
    return date.toLocaleDateString(
      'id-ID',
      {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
        
      }
    );
};
  
export const millisToDateTime = (value: number) => {
    // Konversi nilai ke string
    const date = new Date(value);
  
    return date.toLocaleDateString(
      'id-ID',
      {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour:'2-digit',
        minute:'2-digit',
        second:'2-digit'

      }
    );
};

export const formatDateUS = (date: string) => {
  
    // Konversi tanggal DD/MM/YYYY menjadi MM/DD/YYYY
    const [day, month, year] = date.split("/"); // Pisahkan menjadi array [DD, MM, YYYY]

 // Menggabungkan tanggal dengan format MM/DD/YYYY dan waktu
const formattedStartDate = `${month}/${day}/${year}`;
return formattedStartDate
};