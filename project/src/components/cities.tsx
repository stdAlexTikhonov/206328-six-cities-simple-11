import { useAppSelector, useAppDispatch } from '../hooks';
import { setCity } from '../store/action';
import cn from 'classnames';

export const Cities = () => {
  const cities = useAppSelector((state) => state.cities);
  const selectedCty = useAppSelector((state) => state.selectedCity);
  const dispatch = useAppDispatch();

  return (
    <ul className='locations__list tabs__list'>
      {cities.map((item) => (
        <li key={item.title} className='locations__item'>
          <div
            className={cn('locations__item-link tabs__item', { 'tabs__item tabs__item--active': selectedCty?.title === item.title })}
            style={{ cursor: 'pointer' }}
            onClick={() => dispatch(setCity({ city: item }))}
          >
            <span>{item.title}</span>
          </div>
        </li>
      ))}
    </ul>
  );
};
