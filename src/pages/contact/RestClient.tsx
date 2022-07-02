
export default class RestClient {
    static baseUrl = 'https://react-http-f69a0-default-rtdb.firebaseio.com';
    static sendFormData(data:{name:string, email:string, message:string}) :Promise<any>{
        const url = `${this.baseUrl}/portfolio.json`;
        async function sendForm() {
            const response = await fetch(url,{
                method:"POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            const result = response.ok;
            return result;
        }
         return sendForm();
    }
}
