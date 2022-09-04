import fileDownload from "js-file-download";
import { useState } from "react";
import useGetUser from "../../hooks/useGetUser";
import handleAxiosError from "../../utils/handleAxiosError";
import downloadDiaryCall from "./helpers/downloadDiary";
import updateDiaryCall from "./helpers/updateDiaryCall";
import { IDataUpdateCall, IDateByDate, IDiaryData } from "./interfaces";
import { SavebuttonContainer, SaveButton, DownloadButton } from "./JournalComponents";

interface IButtonsContainerComponent {
    dataByDate: IDateByDate[];
    newPageData: IDateByDate;
}
const ButtonsContainerComponent = ({ dataByDate, newPageData }: IButtonsContainerComponent) => {
    const [diaryData, setDiaryData] = useState<IDiaryData>({ status: "idle", result: null, error: null });
    const [requestData, setRequestData] = useState<IDataUpdateCall>({ status: "idle", result: null, error: null });
    const getUser = useGetUser();
    const handleSave = (e: React.MouseEvent) => {
        e.preventDefault();
        const dataToSend = dataByDate.map((oneDataByDate) => {
            return {
                date: oneDataByDate.date,
                content: oneDataByDate.content.map((content) => content.content).join(),
                id: oneDataByDate.id,
                changed: oneDataByDate.changed,
                isNewEntry: false,
            };
        });
        const dataWithNewPage = [
            ...dataToSend,
            { ...newPageData, content: newPageData.content[0].content, isNewEntry: true },
        ];
        const filtredData = dataWithNewPage.filter((entry) => entry.changed);
        setRequestData({ status: "loading", result: null, error: null });
        updateDiaryCall(filtredData)
            .then((data) => {
                setRequestData({ status: "succesfull", result: data ?? null, error: null });
                getUser();
            })
            .catch((error: Error) => {
                const err = handleAxiosError(error);
                //handled by axios interceptor
                if (err === "return") return;
                setRequestData({ status: "failed", result: null, error: err });
            });
    };
    const downloadDiary = () => {
        setDiaryData({ status: "loading", result: null, error: null });
        downloadDiaryCall()
            .then((data) => {
                fileDownload(new Blob([data]), "diary.pdf");
                setDiaryData({ status: "succesfull", result: null, error: null });
            })
            .catch((err: string) => {
                setDiaryData({ status: "failed", result: null, error: err });
            });
    };
    return (
        <SavebuttonContainer>
            <SaveButton disabled={requestData.status === "loading"} onClick={handleSave}>
                {requestData.status === "loading" ? "Loading..." : "Save"}
            </SaveButton>
            <DownloadButton disabled={diaryData.status === "loading"} onClick={downloadDiary}>
                {diaryData.status === "loading" ? "Loading..." : "Download"}
            </DownloadButton>
        </SavebuttonContainer>
    );
};

export default ButtonsContainerComponent;
