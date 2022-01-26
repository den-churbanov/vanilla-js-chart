import {getChartData} from './data'
import {chart} from "./chart";

const chartExample = chart(document.getElementById('chart'), getChartData())

chartExample.init()




