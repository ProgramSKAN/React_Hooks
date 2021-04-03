//REACT CONTEXT CONSUME
//REACT USEREDUCER
//REACT USECALLBACK
//USEMEMO
import React, {
  useEffect,
  useState,
  useContext,
  useReducer,
  useCallback,
  useMemo,
} from 'react';
import { Header } from './Header';
import { Menu } from './Menu';
import SpeakerData from './SpeakerData';
import SpeakerDetail from './SpeakerDetail';
import { ConfigContext } from './App';

const Speakers = ({}) => {
  const [speakingSaturday, setSpeakingSaturday] = useState(true);
  const [speakingSunday, setSpeakingSunday] = useState(true);

  const [isLoading, setIsLoading] = useState(true);

  //const [speakerList, setSpeakerList] = useState([]);
  //USESTATE is made of USEREDUCER.replace 'speakerList' state with USEREDUCER
  //OR
  //const [speakerList, setSpeakerList] = useReducer((state, action) => action, []);
  //OR
  function speakerReducer(state, action) {
    //(previousState,actionCreator)
    function updateFavorite(favoriteValue) {
      return state.map((item, index) => {
        if (item.id === action.sessionId) {
          return { ...item, favorite: favoriteValue };
        }
        return item;
      });
    }

    switch (action.type) {
      case 'setSpeakerList': {
        return action.data;
      }
      case 'favorite': {
        return updateFavorite(true);
      }
      case 'unfavorite': {
        return updateFavorite(false);
      }
      default:
        return state;
    }
  }
  const [speakerList, dispatch] = useReducer(speakerReducer, []);
  //-----
  const context = useContext(ConfigContext);

  useEffect(() => {
    setIsLoading(true);
    new Promise(function (resolve) {
      setTimeout(function () {
        resolve();
      }, 1000);
    }).then(() => {
      setIsLoading(false);
      const speakerListServerFilter = SpeakerData.filter(({ sat, sun }) => {
        return (speakingSaturday && sat) || (speakingSunday && sun);
      });
      //setSpeakerList(speakerListServerFilter);
      //OR usereducer
      dispatch({
        type: 'setSpeakerList',
        data: speakerListServerFilter,
      });
    });
    return () => {
      console.log('cleanup');
    };
  }, []); // [speakingSunday, speakingSaturday]);

  const handleChangeSaturday = () => {
    setSpeakingSaturday(!speakingSaturday);
  };

  //USEMEMO to memoize values
  //here you are filtering & sorting the list before every render.But if the speakersList is large or complex calculations with webservice calls, then causes performance issue.
  //memoize to capture speakersList along with dependencies that will cause a recalculation and then rerender either calculated or memoized data.
  const newSpeakerList = useMemo(
    () =>
      speakerList
        .filter(
          ({ sat, sun }) =>
            (speakingSaturday && sat) || (speakingSunday && sun),
        )
        .sort(function (a, b) {
          if (a.firstName < b.firstName) {
            return -1;
          }
          if (a.firstName > b.firstName) {
            return 1;
          }
          return 0;
        }),
    [speakingSaturday, speakingSunday, speakerList],
  );

  const speakerListFiltered = isLoading ? [] : newSpeakerList;

  const handleChangeSunday = () => {
    setSpeakingSunday(!speakingSunday);
  };

  //const heartFavoriteHandler = (e, favoriteValue) => {//though th function is not changing, it rerenders SpeakerDetails component again.so useCallbak to memoize function and React.memo SpeakerDetails page
  const heartFavoriteHandler = useCallback((e, favoriteValue) => {
    e.preventDefault();
    const sessionId = parseInt(e.target.attributes['data-sessionid'].value);
    /*setSpeakerList(
      speakerList.map((item) => {
        if (item.id === sessionId) {
          return { ...item, favorite: favoriteValue };
        }
        return item;
      }),
    );
     OR usereducer*/
    dispatch({
      type: favoriteValue === true ? 'favorite' : 'unfavorite',
      sessionId: sessionId,
    });
    //console.log("changing session favorte to " + favoriteValue);
  }, []);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <Header />
      <Menu />
      <div className="container">
        <div className="btn-toolbar  margintopbottom5 checkbox-bigger">
          {context.showSpeakerSpeakingDays === false ? null : (
            <div className="hide">
              <div className="form-check-inline">
                <label className="form-check-label">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    onChange={handleChangeSaturday}
                    checked={speakingSaturday}
                  />
                  Saturday Speakers
                </label>
              </div>
              <div className="form-check-inline">
                <label className="form-check-label">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    onChange={handleChangeSunday}
                    checked={speakingSunday}
                  />
                  Sunday Speakers
                </label>
              </div>
            </div>
          )}
        </div>
        <div className="row">
          <div className="card-deck">
            {speakerListFiltered.map(
              ({ id, firstName, lastName, bio, favorite }) => {
                return (
                  <SpeakerDetail
                    key={id}
                    id={id}
                    favorite={favorite}
                    onHeartFavoriteHandler={heartFavoriteHandler}
                    firstName={firstName}
                    lastName={lastName}
                    bio={bio}
                  />
                );
              },
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speakers;
