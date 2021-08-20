import { videoData } from '../ClassLearn/videoSrc_new'

export const studyData = videoData.map((video) => {
    return {
        ...video,
        detail: video.detail.map((item) => {
            return {
                ...item,
                watch: 0,//视频观看时长
                ifPreview: true, //预习情况
                ifTest: false, //小测情况 
                show: false, //是否展开
            }
        })
    }
});