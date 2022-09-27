import React from 'react';
import './SearchComponent.css';
import styled from 'styled-components';

export default function SearchComponent(props) {
    return (   
        <SearchComponentWrap>
            
        <main className='search-component-container'>

            <div className='title'>
                <h1>인프런에서 성장을 도와드려요</h1>
            </div>

            <div className='search-bar-container'>
                <div className='search-bar'>
                <input className='search-input' type='text' placeholder='배우고 싶은 지식을 입력해보세요'>
                </input>
                <img className='search-button-img' src=".\img\search-main.png"></img>
                </div>
            </div>

            <div className='tag-container'>
                {/* 태그 컴포넌트 삽입 예정 */}
                <a> </a>
            </div>


        </main>
        
        </SearchComponentWrap>
      )
}

const SearchComponentWrap = styled.div`
    padding:20px;
    text-align: center;

    .title{
        font-weight: 400;
        margin-bottom: 20px;
        font-size: 0.7rem;
        color: #363636;
    }

    .search-bar-container{
        /* width:80%; */
        margin: 0 auto;

        .search-bar{
            width: 80%;
            
        position:relative;
        margin: 0 auto;
        vertical-align: middle;
        display: flex;
        justify-content: center;

            .search-input{
            background-color: rgba(29,192,120,.12);
            border: 1px solid rgba(29,192,120,.24);
            box-shadow: 0 2px 4px 0 rgb(0 0 0 / 10%);
            padding: 14px 20px;
            border-radius: 28px;
            height: auto;
            width: inherit;
            transition: all .2s ease;
            flex:1;
            
            /* position:absolute; */
           
        }

        .search-button-img{
            position:absolute;
            width: 25px;
            height: 25px;
            
            display: table-cell;
            
            right: 12px;
            /* float:right; */
            flex:1;
            top:8px;
            /* justify-content: flex-end; */
        }

        }

        
    }

    
`