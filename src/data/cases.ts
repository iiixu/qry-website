export interface Case {
  id: number;
  category: 'automation' | 'robot' | 'hydraulic';
  title: string;
  industry: string;
  location: string;
  year: string;
  desc: string;
  img: string;
  metric: string;
  metricLabel: string;
  featured: boolean;
}

export const cases: Case[] = [
  {
    id: 1, category: 'automation', title: '汽车零部件厂自动化装配线',
    industry: '汽车制造', location: '重庆 渝北', year: '2024',
    desc: '为客户设计并实施完整的自动化装配生产线，采用汇川 PLC + HMI + 变频器方案，实现从上下料、装配到检测的全流程自动化，生产效率提升 40%。',
    img: '/images/cases/01-automotive-assembly.jpg', metric: '+40%', metricLabel: '效率提升', featured: true,
  },
  {
    id: 2, category: 'hydraulic', title: '热成型油压机改造',
    industry: '金属热成型', location: '重庆 / 华东', year: '2024',
    desc: '为天锻、合锻等进口液压机进行热成型油压机升级改造，将传统液压系统升级为电液伺服系统，实现提速节能 — 节能率 35%-45%，生产提速 100%-200%。',
    img: '/images/cases/02-hydraulic-press.jpg', metric: '35-45%', metricLabel: '节能率', featured: true,
  },
  {
    id: 3, category: 'hydraulic', title: '注塑机电熔胶节能提效改造',
    industry: '注塑机械', location: '重庆 / 西南', year: '2024',
    desc: '面向国内一线品牌 1000T 以上注塑机进行电熔胶节能提效改造。熔胶环节占整个能量消耗的 50%-60%，改造后至少节能 15-40%；采用直接传动方式，长时间储料时可动作并行，效率更高；部分可同步开模改造，生产节拍显著提升。储料稳定，转速波动低，储料精度大幅提高。',
    img: '/images/cases/03-injection-molding.jpg', metric: '15-40%', metricLabel: '节能率', featured: true,
  },
  {
    id: 4, category: 'automation', title: '食品加工厂自动化包装线',
    industry: '食品加工', location: '四川 绵阳', year: '2023',
    desc: '设计定制全自动包装生产线，实现从理料、包装到码垛的全流程自动化。',
    img: '/images/cases/04-food-packaging.jpg', metric: '3.2x', metricLabel: '产能', featured: false,
  },
  {
    id: 5, category: 'robot', title: '五金厂搬运机器人系统',
    industry: '五金加工', location: '重庆 江津', year: '2023',
    desc: '部署汇川 IR 系列工业机器人，实现原材料上料和成品下料的自动化搬运。',
    img: '/images/cases/05-material-handling.jpg', metric: '8', metricLabel: '工位数', featured: false,
  },
  {
    id: 6, category: 'hydraulic', title: '机床液压系统升级改造',
    industry: '机床制造', location: '四川 德阳', year: '2022',
    desc: '对老旧机床液压系统进行全面升级，提升加工精度和设备稳定性。',
    img: '/images/cases/06-machine-tool.jpg', metric: '±0.01', metricLabel: '精度', featured: false,
  },
];

export const getFeaturedCases = () => cases.filter(c => c.featured);
export default cases;