import { useState } from 'react';
import Dessert from './Dessert';
import Product from './Product';
import {Tabs, TabList, Tab, TabPanel}from 'react-tabs';
import { Link } from 'react-router-dom';


const BurgerList = [
    {
      id:1,
      imgSrc:'/images/Burger/burger_01.png',
      title:'크랩얼라이브 버거(매운맛)',
      price:'9,900원',
      descript1:'크랩 한마리가 통째로 이색적인 외관의 씨푸드버거',
      relation:'crab',
      category:'burger'
    },
    {
      id:2,
      imgSrc:'/images/Burger/burger_02.png',
      title:'크랩얼라이브 버거(블랙페퍼맛)',
      price:'9,900원',
      descript1:'크랩 한마리가 통째로 이색적인 외관의 씨푸드버거',
      relation:'crab',
      category:'burger'
    },
    {
      id:3,
      imgSrc:'/images/Burger/burger_03.png',
      title:'나폴리맛피아 모짜렐라 버거(토마토 바질)',
      price:'9,100원',
      descript1:'바질의 신선함을 담은 바질마요소스에 풍부하고 진한 토마토소스로 맛을 낸 나폴리맛피아식 스페셜 모짜렐라버거',
      relation:'mafia',
      category:'burger'
    },
    {
      id:4,
      imgSrc:'/images/Burger/burger_04.png',
      title:'나폴리맛피아 모짜렐라 버거(발사믹 바질)',
      price:'9,100원',
      descript1:'바질의 신선함을 담은 바질마요소스에 레드와인 발사믹의 산뜻함을 더한 나폴리맛피아식 스페셜 모짜렐라버거',
      relation:'mafia',
      category:'burger'
    },
    {
      id:5,
      imgSrc:'/images/Burger/burger_05.png',
      title:'전주 비빔라이스 버거',
      price:'7,300원',
      descript1:'전주비빔밥을 담은 라이스번과 노른자가 터지는 반숙란,달콤한 고추장 소스가 어우러진 새로운 라이스 버거',
      relation:'none',
      category:'burger'
    },
    {
      id:6,
      imgSrc:'/images/Burger/burger_06.png',
      title:'리아 새우 베이컨',
      price:'6,100원',
      descript1:'베이컨+토마토로 더욱 풍성해진 맛과 볼륨감의 새우버거 업그레이드 한정판',
      relation:'ria_bacon',
      category:'burger'
    },
    {
      id:7,
      imgSrc:'/images/Burger/burger_07.png',
      title:'리아 불고기 베이컨',
      price:'6,100원',
      descript1:'베이컨+토마토로 더욱 풍성해진 맛과 볼륨감의 불고기버거 업그레이드 한정판',
      relation:'ria_bacon',
      category:'burger'
    },
    {
      id:8,
      imgSrc:'/images/Burger/burger_08.png',
      title:'더블 한우불고기버거',
      price:'13,000원',
      descript1:'국내산 한우를 사용한 패티 2장 구성으로 육즙 가득! 묵직한 육풍미를 특징으로 한 프리미엄 버거',
      relation:'korea_beef',
      category:'burger'
    },
    {
      id:9,
      imgSrc:'/images/Burger/burger_09.png',
      title:'한우불고기버거',
      price:'9,000원',
      descript1:'브리오쉬번에 국내산 한우를 사용한 패티, 신선한 야채, 특제소스로 완성한 프리미엄 햄버거',
      relation:'korea_beef',
      category:'burger'
    },
    {
      id:10,
      imgSrc:'/images/Burger/burger_10.png',
      title:'더블 클래식치즈버거(버터번)',
      price:'7,200원',
      descript1:'두 장의 패티가 이루는 조화로운 맛에 든든함까지 추가된 더블 클래식치즈버거',
      relation:'cheese',
      category:'burger'
    },
    {
      id:11,
      imgSrc:'/images/Burger/burger_11.png',
      title:'더블 치킨버거',
      price:'5,800원',
      descript1:'두 장의 패티가 이루는 조화로운 맛에 든든함까지 추가된 더블버거 시리즈',
      relation:'chicken',
      category:'burger'
    },
    {
      id:12,
      imgSrc:'/images/Burger/burger_12.png',
      title:'더블 데리버거',
      price:'5,000원',
      descript1:'두 장의 패티가 이루는 조화로운 맛에 든든함까지 추가된 더블버거 시리즈',
      relation:'Derry',
      category:'burger'
    },
    {
      id:13,
      imgSrc:'/images/Burger/burger_13.png',
      title:'리아 불고기 더블(빅불)',
      price:'7,600원',
      descript1:'불고기 특유의 소스와 쇠고기의 진함을 배로 느끼는 제품',
      relation:'ria_Bulgogi',
      category:'burger'
    },
    {
      id:14,
      imgSrc:'/images/Burger/burger_14.png',
      title:'리아 불고기',
      price:'5,000원',
      descript1:'두툼한 쇠고기패티와 한국적인 맛의 소스가 잘 조화된 롯데리아 대표 버거',
      relation:'ria_Bulgogi',
      category:'burger'
    },
    {
      id:15,
      imgSrc:'/images/Burger/burger_15.png',
      title:'모짜렐라 인 더 버거 베이컨',
      price:'8,000원',
      descript1:'자연산 모짜렐라 치즈와 고소한 베이컨이 만나 풍부한 맛의 버거',
      relation:'none',
      category:'burger'
    },
    {
      id:16,
      imgSrc:'/images/Burger/burger_16.png',
      title:'더블엑스투버거',
      price:'7,200원',
      descript1:'비프패티2장, 치즈2장으로 깊고 풍부한맛의 정통 아메리칸버거',
      relation:'more',
      category:'burger'
    },
    {
      id:17,
      imgSrc:'/images/Burger/burger_17.png',
      title:'리아 사각새우 더블',
      price:'6,100원',
      descript1:'미니새우패티 2장의 새우 매니아를 위한버거',
      relation:'ria_shrimp',
      category:'burger'
    },
    {
      id:18,
      imgSrc:'/images/Burger/burger_18.png',
      title:'리아 새우',
      price:'5,000원',
      descript1:'새우살을 가득넣어 더 맛있어진 오리지널 새우버거',
      relation:'ria_shrimp',
      category:'burger'
    },
    {
      id:19,
      imgSrc:'/images/Burger/burger_19.png',
      title:'미라클버거',
      price:'5,700원',
      descript1:'100% 식물성 패티와 신선한 야채들이 조화된 대체육버거',
      relation:'Miracle',
      category:'burger'
    },
    {
      id:20,
      imgSrc:'/images/Burger/burger_20.png',
      title:'더블 미라클버거',
      price:'7,200원',
      descript1:'100% 식물성 패티와 신선한 야채들이 조화된 대체육버거',
      relation:'Miracle',
      category:'burger'
    },
    {
      id:21,
      imgSrc:'/images/Burger/burger_21.png',
      title:'핫크리스피치킨버거',
      price:'6,200원',
      descript1:'닭가슴살 패티로 만든 매콤 화끈한 프리미엄 치킨버거',
      relation:'more',
      category:'burger'
    },
    {
      id:22,
      imgSrc:'/images/Burger/burger_22.png',
      title:'클래식치즈버거(버터번)',
      price:'5,000원',
      descript1:'부드러운 치즈와 호주산 쇠고기패티의 본연의 맛을 느낄수 있는 치즈버거',
      relation:'cheese',
      category:'burger'
    },
    {
      id:23,
      imgSrc:'/images/Burger/burger_23.png',
      title:'티렉스버거',
      price:'5,000원',
      descript1:'빵보다 큰 쫄깃한 통닭다리살 패티와 부드러운 크림 소스의 만남',
      relation:'more',
      category:'burger'
    },
    {
      id:24,
      imgSrc:'/images/Burger/burger_24.png',
      title:'치킨버거',
      price:'4,300원',
      descript1:'닭고기패티와 데리야끼 소스로 만든 담백하고 달콤한 맛의 치킨버거',
      relation:'chicken',
      category:'burger'
    },
    {
      id:25,
      imgSrc:'/images/Burger/burger_25.png',
      title:'데리버거',
      price:'3,700원',
      descript1:'쇠고기패티에 달콤 짭짤한 데리소스를 더한 가성비 버거',
      relation:'Derry',
      category:'burger'
    },
    {
      id:26,
      imgSrc:'/images/Burger/burger_26.png',
      title:'한우연인팩',
      price:'16,700원',
      descript1:'한우불고기버거와 새우버거를 함께 즐길 수 있는 2인팩 제품 구성 : 한우불고기버거, 새우버거, 포테이토, 치즈스틱, 콜라2잔',
      relation:'korea_pack',
      category:'burger'
    },
    {
      id:27,
      imgSrc:'/images/Burger/burger_27.png',
      title:'한우명품팩',
      price:'18,500원',
      descript1:'한우불고기버거와 핫크리스피버거를 함께 즐길 수 있는 2인팩 제품구성 : 한우불고기버거 + 핫크리스피버거 + 양념감자 + 치즈스틱 + 콜라2잔',
      relation:'korea_pack',
      category:'burger'
    },
]
const DessertList =[
    {
      id:1,
      imgSrc:'/images/Dessert/dessert_01.png',
      title:'쥐포튀김',
      price:'4,200원',
    },
    {
      id:2,
      imgSrc:'/images/Dessert/dessert_02.png',
      title:'못난이치즈감자',
      price:'3,500원',
    },
    {
      id:3,
      imgSrc:'/images/Dessert/dessert_03.png',
      title:'양념너겟',
      price:'3,300원',
    },
    {
      id:4,
      imgSrc:'/images/Dessert/dessert_04.png',
      title:'NEW 치킨너겟',
      price:'3,100원',
    },
    {
      id:5,
      imgSrc:'/images/Dessert/dessert_05.png',
      title:'포테이토',
      price:'2,000원',
    },
    {
      id:6,
      imgSrc:'/images/Dessert/dessert_06.png',
      title:'양념감자',
      price:'2,600원',
    },
    {
      id:7,
      imgSrc:'/images/Dessert/dessert_07.png',
      title:'포테이토(L)',
      price:'2,500원',
    },
    {
      id:8,
      imgSrc:'/images/Dessert/dessert_08.png',
      title:'치즈스틱',
      price:'2,800원',
    },
    {
      id:9,
      imgSrc:'/images/Dessert/dessert_09.png',
      title:'롱치즈스틱',
      price:'2,400원',
    },
    {
      id:10,
      imgSrc:'/images/Dessert/dessert_10.png',
      title:'통오징어링',
      price:'2,800원',
    },
    {
      id:11,
      imgSrc:'/images/Dessert/dessert_11.png',
      title:'지파이 하바네로',
      price:'5,500원',
    },
    {
      id:12,
      imgSrc:'/images/Dessert/dessert_12.png',
      title:'지파이 고소한맛',
      price:'4,500원',
    },
    {
      id:13,
      imgSrc:'/images/Dessert/dessert_13.png',
      title:'코울슬로',
      price:'1,900원',
    },
]
const ChickenList =[
    {
      id:1,
      imgSrc:'/images/Chicken/chicken01.png',
      title:'화이어윙',
      price:'3,200원',
    },
    {
      id:2,
      imgSrc:'/images/Chicken/chicken02.png',
      title:'치킨휠레',
      price:'3,100원',
    },
    {
      id:1,
      imgSrc:'/images/Chicken/chicken03.png',
      title:'치킨 1조각',
      price:'2,900원',
    },
]
const DrinkList =[
    {
      id:1,
      imgSrc:'/images/Drink/drink01.png',
      title:'콜라',
      price:'2,000원',
    },
    {
      id:2,
      imgSrc:'/images/Drink/drink02.png',
      title:'사이다',
      price:'2,000원',
    },
]
const IceList =[
    {
      id:1,
      imgSrc:'/images/Ice/Ice01.png',
      title:'팥빙수',
      price:'5,900원',
    },
    {
      id:2,
      imgSrc:'/images/Ice/Ice02.png',
      title:'소프트콘',
      price:'500원',
    },
]

function Home(){
    const [order, setOrder] = useState(false);
    return(
        <>
        <div className="header">
            <div className="nav_bar">
                <a href='#' id='prev'></a>
                <a href='#' id='basket'></a>
            </div>
            <div className='background'>
                <img src='/images/Burger/background.png'/>
            </div>
            <a href='#' className='logo'></a>
        </div>
        <div className="main_section">
            <div className="section_border">
            <h1>롯데리아<a href='#' id='one'></a></h1>
            <strong>TASTE THE FUN</strong>
            <p>LOTTE EATZ에서 빠르고 편리하게 주문하세요.</p>
            <div className='buttons'>
                <button className="brand">브랜드 소개</button>
                <button className="search">매장찾기</button>
            </div>
            </div>
        </div>
        <Tabs className="menu_section">
            <TabList className="menu">
                <Tab className="button">버거</Tab>
                <Tab className="button">디저트</Tab>
                <Tab className="button">치킨</Tab>
                <Tab className="button">음료</Tab>
                <Tab className="button">아이스샷</Tab>
            </TabList>
            <TabPanel>
                <Link to='/burger' className="menu_list">
                    <h2>버거</h2>
                    {
                        BurgerList.map((item,idx)=>(
                          <Link key={item.id} to={`/product/${item.category}/${item.id}`} state={{product:item}}>
                            <Product imgsrc={item.imgSrc} title={item.title} descript={item.price}/>
                          </Link>
                        ))
                    }
                </Link>
            </TabPanel>
            <TabPanel className="menu_list">
                <h2>디저트</h2>
                {
                    DessertList.map((item,idx)=>(
                    <Product key={item.id} imgsrc={item.imgSrc} title={item.title} descript={item.price}/>
                    ))
                }
            </TabPanel>
            <TabPanel className="menu_list">
            <h2>치킨</h2>
            {
                ChickenList.map((item,idx)=>(
                <Product key={item.id} imgsrc={item.imgSrc} title={item.title} descript={item.price}/>
                ))
            }
            </TabPanel>
            <TabPanel className="menu_list">
            <h2>음료</h2>
            {
                DrinkList.map((item,idx)=>(
                <Product key={item.id} imgsrc={item.imgSrc} title={item.title} descript={item.price}/>
                ))
            }
            </TabPanel>
            <TabPanel className="menu_list">
            <h2>아이스샷</h2>
            {
                IceList.map((item,idx)=>(
                <Product key={item.id} imgsrc={item.imgSrc} title={item.title} descript={item.price}/>
                ))
            }
            </TabPanel>
        </Tabs>
        <div className="footer_section">
            <button className="order_button" onClick={()=>{setOrder(true)}}>주변 매장에서 주문	&rang; </button>
        </div>
        {
            order && (
            <div className='order_box'>
                <div className='order_top'>
                    <h3>
                    <span>주문유형</span>을<br/>
                    선택해주세요!
                    </h3>
                    <button onClick={()=>{setOrder(false)}}> &times;</button>
                </div>
                <div className='order_menu'>
                    <button className='delivery'><span></span>배달</button>
                    <button className='pickup'><span></span>매장픽업</button>
                </div>
            </div>    
            )
        }
        </>
    )
}

export default Home;