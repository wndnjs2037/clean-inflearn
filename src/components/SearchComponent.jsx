import React from 'react';
import './SearchComponent.css';

export default function SearchComponent(props) {
    return (   
        <main className='search-component-container'>

            <div className='title'>
                <h1>인프런에서 성장을 도와드려요</h1>
            </div>

            <div className='search-bar'>
                <input type='text' placeholder='배우고 싶은 지식을 입력해보세요'>
                </input>

            </div>

            <div className='tag-container'>
                {/* 태그 컴포넌트 삽입 예정 */}
                <a> </a>
            </div>


        </main>
      )
}