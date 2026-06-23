export type ProductCategory =
  | 'vfd' | 'servo' | 'motor' | 'plc' | 'hmi'
  | 'pneumatic' | 'robot' | 'iot' | 'vision'
  | 'hydraulic' | 'transmission' | 'sensor';

export interface Product {
  id: number;
  category: ProductCategory;
  name: string;
  spec: string;
  desc: string;
  img: string;
}

export const products: Product[] = [
  { id: 1, category: 'vfd', name: 'MD290通用性变频器', spec: 'MD290', desc: '通用型变频器，稳定可靠', img: '/images/products/vfd/MD290通用性变频器.png' },
  { id: 2, category: 'vfd', name: 'MD580高性能工程型变频器', spec: 'MD580', desc: '高性能工程型变频器', img: '/images/products/vfd/MD580高性能工程型变频器.png' },
  { id: 3, category: 'vfd', name: 'MD630系列全球通用型变频器', spec: 'MD630', desc: '全球通用型变频器', img: '/images/products/vfd/MD630系列全球通用型变频器.png' },
  { id: 4, category: 'servo', name: 'SV630经济型伺服驱动器', spec: 'SV630', desc: '经济型伺服驱动器', img: '/images/products/servo/SV630经济型伺服驱动器.png' },
  { id: 5, category: 'servo', name: 'SV660通用型伺服驱动器', spec: 'SV660', desc: '通用型伺服驱动器', img: '/images/products/servo/SV660通用型伺服驱动器.png' },
  { id: 6, category: 'servo', name: 'SV680系列高性能旗舰型伺服驱动器', spec: 'SV680', desc: '高性能旗舰型伺服驱动器', img: '/images/products/servo/SV680系列高性能旗舰型伺服驱动器.png' },
  { id: 7, category: 'motor', name: 'MS1系列低压伺服电机', spec: 'MS1', desc: '低压伺服电机', img: '/images/products/motor/MS1系列低压伺服电机.png' },
  { id: 8, category: 'motor', name: 'MSA系列伺服电机', spec: 'MSA', desc: 'MSA系列伺服电机', img: '/images/products/motor/MSA系列伺服电机.png' },
  { id: 9, category: 'motor', name: 'ISMG系列大功率伺服电机', spec: 'ISMG', desc: '大功率伺服电机', img: '/images/products/motor/ISMG系列大功率伺服电机.png' },
  { id: 10, category: 'plc', name: 'Easy系列全场景紧凑型小型PLC', spec: 'Easy系列', desc: '全场景紧凑型小型PLC', img: '/images/products/plc/Easy系列全场景紧凑型小型PLC.png' },
  { id: 11, category: 'plc', name: 'AM500系列标准型中型PLC', spec: 'AM500', desc: '标准型中型PLC', img: '/images/products/plc/AM500系列标准型中型PLC.png' },
  { id: 12, category: 'plc', name: 'EVO800系列大型冗余PLC控制系统', spec: 'EVO800', desc: '大型冗余PLC控制系统', img: '/images/products/plc/EVO800系列大型冗余PLC控制系统.PNG' },
  { id: 13, category: 'hmi', name: 'ITS7000系列标准型HMI', spec: 'ITS7000', desc: '标准型HMI触摸屏', img: '/images/products/hmi/ITS7000 系列标准型 HMI.PNG' },
  { id: 14, category: 'hmi', name: 'IT9000系列高端型HMI', spec: 'IT9000', desc: '高端型HMI触摸屏', img: '/images/products/hmi/IT9000 系列高端型 HMI.PNG' },
  { id: 15, category: 'hmi', name: 'IT7000系列物联HMI', spec: 'IT7000', desc: '物联HMI触摸屏', img: '/images/products/hmi/IT7000 系列物联HMI.PNG' },
  { id: 16, category: 'pneumatic', name: 'CBA系列双轴气缸', spec: 'CBA系列', desc: '双轴气缸', img: '/images/products/pneumatic/CBA系列双轴气缸.png' },
  { id: 17, category: 'pneumatic', name: 'CFA系列薄型气缸', spec: 'CFA系列', desc: '薄型气缸', img: '/images/products/pneumatic/CFA系列薄型气缸.png' },
  { id: 18, category: 'pneumatic', name: 'IPT300系列分布式阀岛', spec: 'IPT300', desc: '分布式阀岛', img: '/images/products/pneumatic/IPT300系列分布式阀岛.png' },
  { id: 19, category: 'robot', name: 'IR-S3系列SCARA机器人', spec: 'IR-S3', desc: 'SCARA机器人', img: '/images/products/robot/IR-S3系列SCARA 机器人.PNG' },
  { id: 20, category: 'robot', name: 'IR-PL系列四关节码垛机器人', spec: 'IR-PL130/PL180', desc: '四关节码垛机器人', img: '/images/products/robot/IR-PL130&PL180系列四关节码垛机器人.PNG' },
  { id: 21, category: 'robot', name: 'IR-U系列协作机器人', spec: 'IR-U系列', desc: '协作机器人', img: '/images/products/robot/IR-U4&U8&U13&U18系列协作机器人.PNG' },
  { id: 22, category: 'iot', name: '设备数据采集模块', spec: 'IoT-DA100', desc: '低成本设备数据采集终端', img: '' },
  { id: 23, category: 'iot', name: '生产数据监控系统', spec: 'IoT-MON200', desc: '设备实时监控平台', img: '' },
  { id: 24, category: 'iot', name: '生产数据追溯系统', spec: 'IoT-Trace300', desc: '生产数据记录与追溯', img: '' },
  { id: 25, category: 'vision', name: '工业视觉相机', spec: 'IV-CAM', desc: '高精度工业视觉检测相机', img: '' },
  { id: 26, category: 'vision', name: '视觉检测系统', spec: 'IV-Inspect', desc: '缺陷检测与尺寸测量', img: '' },
  { id: 27, category: 'vision', name: '视觉定位系统', spec: 'IV-Locate', desc: '精密定位与引导', img: '' },
  { id: 28, category: 'hydraulic', name: '大功率永磁电机', spec: 'PMSM系列', desc: '高效节能永磁同步电机', img: '' },
  { id: 29, category: 'hydraulic', name: '液压油泵', spec: 'Pump系列', desc: '各类液压系统油泵', img: '' },
  { id: 30, category: 'hydraulic', name: '液压电磁阀/比例阀', spec: 'Valve系列', desc: '各品牌液压电磁阀、比例阀', img: '' },
  { id: 31, category: 'transmission', name: '行星减速机', spec: 'Planetary系列', desc: '精密行星齿轮减速机', img: '' },
  { id: 32, category: 'transmission', name: '涡轮减速机', spec: 'Worm系列', desc: '涡轮蜗杆减速机', img: '' },
  { id: 33, category: 'transmission', name: '丝杆导轨', spec: 'BallScrew系列', desc: '精密滚珠丝杆与导轨', img: '' },
  { id: 34, category: 'sensor', name: '安全光幕', spec: 'Safety系列', desc: '工业安全防护光幕', img: '' },
  { id: 35, category: 'sensor', name: '接近传感器', spec: 'Proximity系列', desc: '电感式/电容式接近开关', img: '' },
  { id: 36, category: 'sensor', name: '光电传感器', spec: 'Photoelectric系列', desc: '光电开关与光电编码器', img: '' },
];