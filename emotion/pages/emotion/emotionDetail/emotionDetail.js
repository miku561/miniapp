Page({
  data: {
    idx: 1,
    year: 0,
		month: 0,
		months: 0,
		date: ['日', '一', '二', '三', '四', '五', '六'],
		dateArr: [],
		isToday: 0,
		isTodayWeek: false,
    todayIndex: 0,
    emojiData:[{
      imgUrl: 'http://7jptey.com1.z0.glb.clouddn.com/Fi-5HsHeWb2Kytp1YT82KQzN6V9A',
      state: '幸福',
      date: '2018年8月5日',
      content: '吃了一顿大餐'
    }]
  },
  onLoad: function () {
		let now = new Date();
		let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let day =  now.getDate()
    let months = month < 10 ? "0" + month : month
    day = day < 10 ? "0" + day : day
		this.dateInit();
		this.setData({
			year: year,
			month: month,
			isToday: '' + year + '/' + months + '/' + day
    })
  },
  dateInit: function(setYear,setMonth){
		//全部时间的月份都是按0~11基准，显示月份才+1
		let dateArr = [];						//需要遍历的日历数组数据
		let arrLen = 0;							//dateArr的数组长度
		let now = setYear ? new Date(setYear,setMonth) : new Date();
		let year = setYear || now.getFullYear();
		let nextYear = 0;
		let month = setMonth || now.getMonth();					//没有+1方便后面计算当月总天数
		let nextMonth = (month + 1) > 11 ? 1 : (month + 1);		
		let startWeek = new Date(year + '/' + (month + 1) + '/' + 1).getDay();  							//目标月1号对应的星期
		let dayNums = new Date(year,nextMonth,0).getDate();				//获取目标月有多少天
		let obj = {};		
		let num = 0;
		
		if(month + 1 > 11){
			nextYear = year + 1;
			dayNums = new Date(nextYear,nextMonth,0).getDate();
		}
		arrLen = startWeek + dayNums;
		for(let i = 0; i < arrLen; i++){
			if(i >= startWeek){
       let months = month + 1 < 10 ? "0" + (month + 1) : month + 1
       let nums = num < 10 ? "0" + num : num
        num = i - startWeek + 1;
				obj = {
					isToday: '' + year + '/' + months + '/' + nums ,
					dateNum: num
				}
			}else{
				obj = {};
			}
			dateArr[i] = obj;
		}
		this.setData({
			dateArr: dateArr
		})
 
		let nowDate = new Date();
		let nowYear = nowDate.getFullYear();
		let nowMonth = nowDate.getMonth() + 1;
		let nowWeek = nowDate.getDay();
		let getYear = setYear || nowYear;
		let getMonth = setMonth >= 0 ? (setMonth + 1) : nowMonth;
 
		if (nowYear == getYear && nowMonth == getMonth){
			this.setData({
				isTodayWeek: true,
				todayIndex: nowWeek
			})
		}else{
			this.setData({
				isTodayWeek: false,
				todayIndex: -1
			})
		}
	},
	lastMonth: function(){
		//全部时间的月份都是按0~11基准，显示月份才+1
		let year = this.data.month - 2 < 0 ? this.data.year - 1 : this.data.year;
		let month = this.data.month - 2 < 0 ? 11 : this.data.month - 2;
		this.setData({
			year: year,
			month: (month + 1)
		})
		this.dateInit(year,month);
	},
	nextMonth: function(){
		//全部时间的月份都是按0~11基准，显示月份才+1
		let year = this.data.month > 11 ? this.data.year + 1 : this.data.year;
		let month = this.data.month > 11 ? 0 : this.data.month;
		this.setData({
			year: year,
			month: (month + 1)
		})
		this.dateInit(year, month);
	},
  select: function(e){
    this.setData({
      idx: e.currentTarget.dataset.idx
    })
  },
  showList: function(e){
    let date = e.currentTarget.dataset.date
    console.log(date)
  }
})