const getTimeService = {

    timeFunService() {
        let time = new Date();
        let year = time.getFullYear();
        let month: any = time.getMonth() + 1;
        let day: any = time.getDate();
        let sep = '-';
        const dd = day < 10 ? '0' + day : day;
        const mon = month < 10 ? '0' + month : month;
        let hour: any = time.getHours();
        let min: any = time.getMinutes();
        let sed: any = time.getSeconds();
        let spl = ':'
        const hh = hour < 10 ? '0' + hour : hour;
        const mm = min < 10 ? '0' + min : min;
        const se = sed < 10 ? '0' + sed : sed;
        const dataTime = year + sep + mon + sep + dd + ' ' + hh + spl + mm + spl + se;
        return dataTime;
    }
}


export default getTimeService;