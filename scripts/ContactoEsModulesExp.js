export const template = document.createElement('template');
template.innerHTML = `
    <style>
        .card-container {
            display: flex;
            border: 1px solid #ccc;
            border-radius: 30px;
            overflow: hidden;
            width: 300px;
            position: relative;
            transition: all 1s;
        }
        .icon-container {
            background-color: #6EA343;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 80px;
            height: 80px;
            border-radius: 100%;
            margin: 10px;
        }
        
        .icon-container img {
            width: 40px;
            height: 40px;
        }
        .text-container {
            padding: 10px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            color:#294145;
        }
        .text-container h3 {
            margin: 0;
            color:#6EA343;
        }
        .text-container p {
            margin: 5px 0;
        }
        .card-container::before, .card-container::after {
            content: "";
            width: 10px;
            height: 10px;
            position: absolute;
            border: 0px solid #fff;
            transition: all 1s;
        }
        .card-container::after {
            top: -1px;
            left: -1px;
            border-top: 5px solid #294145;
            border-left: 5px solid #294145;
        }
        .card-container::before {
            bottom: -1px;
            right: -1px;
            border-bottom: 5px solid #294145;
            border-right: 5px solid #294145;
        }
        .card-container:hover {
            border-top-right-radius: 0px;
            border-bottom-left-radius: 0px;
        }
        .card-container:hover::before, .card-container:hover::after {
            width: 100%;
            height: 100%;
        }
    </style>
    <div class="card-container">
        <div class="icon-container">
            <img id="icon" src="" alt="Icon">
        </div>
        <div class="text-container">
            <h3 id="title"></h3>
            <p id="description1"></p>
            <p id="description2"></p>
        </div>
    </div>
`;
