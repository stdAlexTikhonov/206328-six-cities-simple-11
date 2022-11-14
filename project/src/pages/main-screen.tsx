import { Offers } from '../components/offers';
import type { MainProps } from '../types';

export const MainScreen = ({ offers }: MainProps) => (
  <>
    <div style={{ display: 'none' }}>
      <svg xmlns='http://www.w3.org/2000/svg'>
        <symbol id='icon-arrow-select' viewBox='0 0 7 4'>
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z'
          />
        </symbol>
        <symbol id='icon-bookmark' viewBox='0 0 17 18'>
          <path d='M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z'></path>
        </symbol>
        <symbol id='icon-star' viewBox='0 0 13 12'>
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z'
          />
        </symbol>
      </svg>
    </div>

    <header className='header'>
      <div className='container'>
        <div className='header__wrapper'>
          <div className='header__left'>
            <a
              className='header__logo-link header__logo-link--active'
              href='https://localhost:3000'
            >
              <img
                className='header__logo'
                src='img/logo.svg'
                alt='6 cities logo'
                width='81'
                height='41'
              />
            </a>
          </div>
          <nav className='header__nav'>
            <ul className='header__nav-list'>
              <li className='header__nav-item user'>
                <div className='header__nav-profile'>
                  <div className='header__avatar-wrapper user__avatar-wrapper'></div>
                  <span className='header__user-name user__name'>
                    Oliver.conner@gmail.com
                  </span>
                </div>
              </li>
              <li className='header__nav-item'>
                <a className='header__nav-link' href='https://localhost:3000'>
                  <span className='header__signout'>Sign out</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>

    <main className='page__main page__main--index'>
      <h1 className='visually-hidden'>Cities</h1>
      <div className='tabs'>
        <section className='locations container'>
          <ul className='locations__list tabs__list'>
            <li className='locations__item'>
              <a
                className='locations__item-link tabs__item'
                href='https://localhost:3000'
              >
                <span>Paris</span>
              </a>
            </li>
            <li className='locations__item'>
              <a
                className='locations__item-link tabs__item'
                href='https://localhost:3000'
              >
                <span>Cologne</span>
              </a>
            </li>
            <li className='locations__item'>
              <a
                className='locations__item-link tabs__item'
                href='https://localhost:3000'
              >
                <span>Brussels</span>
              </a>
            </li>
            <li className='locations__item'>
              <a
                className='locations__item-link tabs__item tabs__item--active'
                href='https://localhost:3000'
              >
                <span>Amsterdam</span>
              </a>
            </li>
            <li className='locations__item'>
              <a
                className='locations__item-link tabs__item'
                href='https://localhost:3000'
              >
                <span>Hamburg</span>
              </a>
            </li>
            <li className='locations__item'>
              <a
                className='locations__item-link tabs__item'
                href='https://localhost:3000'
              >
                <span>Dusseldorf</span>
              </a>
            </li>
          </ul>
        </section>
      </div>
      <Offers offers={offers} />
    </main>
  </>
);
