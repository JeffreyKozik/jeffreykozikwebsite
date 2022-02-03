import * as React from "react"
import PageComponent from "../../components/pagesHelpers/pagecomponent"

import TaskTimeRecorderComponent from "../../components/pages/tasktimerecorder"

const TaskTimeRecorder = () => (
    <PageComponent pageInnerComponent=<TaskTimeRecorderComponent/> seoName="Task Time Recorder"/>
)

export default TaskTimeRecorder
