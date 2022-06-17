
const TabPanel = ({displayItem, index, content}) => {
    return (
        <div
            className="mt-3 mb-3 mt-lg-4 mb-lg-4"
            hidden={displayItem !== index}
        >
            {content}
        </div>
    );
};

export default TabPanel;