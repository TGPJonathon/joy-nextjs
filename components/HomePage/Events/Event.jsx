import Image from 'next/image';

import classes from './Event.module.css';

export default function Event() {
  const tempList = {
    data: [
      {
        id: 1,
        attributes: {
          Title: 'Louder Than A Bomb',
          Description: 'Come Through Come Through',
          Time: '2022-05-31T04:00:00.000Z',
          createdAt: '2022-05-16T11:02:10.123Z',
          updatedAt: '2022-05-16T11:02:13.460Z',
          publishedAt: '2022-05-16T11:02:13.458Z',
        },
      },
      {
        id: 2,
        attributes: {
          Title: 'Test 2',
          Description: 'WE OUT HERE GANG GANG',
          Time: '2022-05-31T04:00:00.000Z',
          createdAt: '2022-05-16T11:06:01.465Z',
          updatedAt: '2022-05-16T11:06:09.389Z',
          publishedAt: '2022-05-16T11:06:09.388Z',
        },
      },
      {
        id: 3,
        attributes: {
          Title: 'Test3',
          Description: 'Test3',
          Time: '2022-05-31T04:02:00.000Z',
          createdAt: '2022-05-16T11:20:16.357Z',
          updatedAt: '2022-05-16T11:20:19.576Z',
          publishedAt: '2022-05-16T11:20:19.574Z',
        },
      },
    ],
    meta: { pagination: { page: 1, pageSize: 25, pageCount: 1, total: 3 } },
  };

  return (
    <section className={classes.event}>
      <h2 className={classes.title}>Upcoming Events</h2>
      <div className={classes.events}>
        {tempList.data.map((event, index) => {
          return (
            <div className={classes.section} key={index}>
              <div className={classes.image}>
                <Image
                  src="/test-picture3.jpg"
                  alt="test"
                  height={1000}
                  width={1000}
                />
              </div>
              <div className={classes.content}>
                <h3>{event.attributes.Title}</h3>
                <p>{event.attributes.Description}</p>
                <a href="#">Link to Event</a>
                <p>{event.attributes.Time}</p>
                <p>Location</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className={classes.button}>
        <button>See All!</button>
      </div>
    </section>
  );
}
