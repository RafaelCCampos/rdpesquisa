import { Platform } from "../Records/types";

export type Game = {
    id: number,
    title: string,
    platform: Platform,
}

export type BarChartData = {
    x: string,
    y: number,
}

export type PieChartData = {
    labels: string[],
    series: number[],
}