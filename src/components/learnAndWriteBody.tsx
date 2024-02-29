import React, { useState } from 'react';

const LearnAndWriteBody: React.FC = () => {
  const [info, setInfo] = useState({
    githubUrl: 'KDT-C Github Url',
    notionUrl: 'KDT-C Notion Url',
    imageUrl: 'learnAndWriteBodyRecipeImage1WrapCss',
  });

  const changeContent = (project: string) => {
    if (project === 'KDT-C') {
      setInfo({
        githubUrl: 'KDT-C Github Url',
        notionUrl: 'KDT-C Notion Url',
        imageUrl: 'learnAndWriteBodyRecipeImage1WrapCss',
      });
    } else if (project === 'KDT-A') {
      setInfo({
        githubUrl: 'KDT-A Github Url',
        notionUrl: 'KDT-A Notion Url',
        imageUrl: 'learnAndWriteBodyRecipeImage2WrapCss',
      });
    } else if (project === 'KDT-B') {
      setInfo({
        githubUrl: 'KDT-B Github Url',
        notionUrl: 'KDT-B Notion Url',
        imageUrl: 'learnAndWriteBodyRecipeImage3WrapCss',
      });
    }
  };

  return (
    <div className="learnAndWriteBodyCss">
      <div className="learnAndWriteBodyWrapCss">
        <div className="learnAndWriteBodyTitleCss">Project</div>
        <div className="learnAndWriteBodyButtonWrapCss">
          <div>
            <button
              className="learnAndWriteBodyButtonCss"
              onClick={() => changeContent('KDT-C')}
            >
              KDT-C
            </button>
            <div className="learnAndWriteBodyTextCss">요리 레시피</div>
          </div>
          <div>
            <button
              className="learnAndWriteBodyButtonCss"
              onClick={() => changeContent('KDT-A')}
            >
              KDT-A
            </button>
            <div className="learnAndWriteBodyTextCss">주식</div>
          </div>
          <div>
            <button
              className="learnAndWriteBodyButtonCss"
              onClick={() => changeContent('KDT-B')}
            >
              KDT-B
            </button>
            <div className="learnAndWriteBodyTextCss">버스</div>
          </div>
        </div>
        <div className="learnAndWriteBodyGithubWrapCss">
          <div>Github url : </div>
          <div>{info.githubUrl}</div>
        </div>
        <div className="learnAndWriteBodyNotionWrapCss">
          <div>Notion url : </div>
          <div>{info.notionUrl}</div>
        </div>
        <div className={info.imageUrl}></div>
      </div>
    </div>
  );
};

export default LearnAndWriteBody;
