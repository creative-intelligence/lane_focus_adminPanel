import React, { useState, useEffect } from "react";
import ReactApexChart from 'react-apexcharts';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function ChartOne({ dateRange, onDateRangeChange, aggregationType, onAggregationChange, dataType, onDataTypeChange }) {
  const [options, setOptions] = useState({});
  const [series, setSeries] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const dummyData = {
    dateRanges: ["05.01.2023 - 05.31.2023", "06.01.2023 - 06.30.2023"],
    aggregationTypes: ["monthly", "daily"],
    dataTypes: ["Total Users", "Drivers", "Administrators"],
    chartData: {
      "05.01.2023 - 05.31.2023": {
        "monthly": {
          "Total Users": [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39, 51],
          "Drivers": [20, 15, 26, 20, 35, 25, 54, 42, 49, 26, 29, 41],
          "Administrators": [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]
        },
        "daily": {
          "Total Users": [5,4,10,5,2,7,9,0,2,12,9,12,11],
          "Drivers": [3,2,6,3,1,4,5,0,1,7,5,7,6],
          "Administrators": [2,2,4,2,1,3,4,0,1,5,4,5,5]
        }
      },
      "06.01.2023 - 06.30.2023": {
        "monthly": {
          "Total Users": [40, 35, 46, 40, 55, 45, 74, 62, 69, 46, 49, 61],
          "Drivers": [25, 20, 31, 25, 40, 30, 59, 47, 54, 31, 34, 46],
          "Administrators": [15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15]
        },
        "daily": {
          "Total Users": [6,5,11,6,3,8,10,1,3,13,10,13,12],
          "Drivers": [4,3,7,4,2,5,6,0,2,8,6,8,7],
          "Administrators": [2,2,4,2,1,3,4,0,1,5,4,5,5]
        }
      }
    }
  };
  
  useEffect(() => {
    const newData = dummyData.chartData[dateRange][aggregationType][dataType];
    const xAxisCategories = aggregationType === 'monthly' ? ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'] : Array.from({ length: newData.length }, (_, i) => `${i + 1}`);

    setOptions({
      legend: {
        show: false,
        position: 'top',
        horizontalAlign: 'left',
      },
      colors: ['#3b82f6'],
      chart: {
        fontFamily: 'Satoshi, sans-serif',
        height: 335,
        type: 'area',
        dropShadow: {
          enabled: true,
          color: '#3b82f6',
          top: 40,
          blur: 4,
          left: 0,
          opacity: 0.1,
        },
        toolbar: {
          show: false,
        },
      },
      responsive: [
        {
          breakpoint: 1024,
          options: {
            chart: {
              height: 300,
            },
          },
        },
        {
          breakpoint: 1366,
          options: {
            chart: {
              height: 350,
            },
          },
        },
      ],
      stroke: {
        width: [2],
        curve: 'straight',
      },
      grid: {
        xaxis: {
          lines: {
            show: true,
          },
        },
        yaxis: {
          lines: {
            show: true,
          },
        },
      },
      dataLabels: {
        enabled: false,
      },
      markers: {
        size: 4,
        colors: '#fff',
        strokeColors: ['#3b82f6'],
        strokeWidth: 3,
        strokeOpacity: 0.9,
        strokeDashArray: 0,
        fillOpacity: 1,
        discrete: [],
        hover: {
          size: undefined,
          sizeOffset: 5,
        },
      },
      xaxis: {
        type: 'category',
        categories: xAxisCategories,
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        title: {
          style: {
            fontSize: '0px',
          },
        },
        min: 0,
        max: 100,
      },
    });
    
    setSeries([{ data: newData }]);
  }, [dateRange, aggregationType, dataType]);

  const handleDateRangeChange = (event) => {
    const range = event.target.value;
    onDateRangeChange(range);
  };

  const handleAggregationChange = (event) => {
    const type = event.target.value;
    onAggregationChange(type);
  };

  const handleDataTypeChange = (event) => {
    const type = event.target.value;
    onDataTypeChange(type);
  };

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7 pb-5 shadow-xl sm:px-7 ">
      <div className="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap md:px-6 ">
        <div className="flex w-full flex-wrap gap-3 sm:gap-5">
          <DatePicker
            selected={startDate}
            onChange={handleStartDateChange}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            dateFormat="MM.dd.yyyy"
            className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
          <DatePicker
            selected={endDate}
            onChange={handleEndDateChange}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            dateFormat="MM.dd.yyyy"
            className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div className="flex w-[50%] flex-wrap gap-3 sm:gap-5">
          <select 
            value={aggregationType} 
            onChange={handleAggregationChange} 
            className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          >
            {dummyData.aggregationTypes.map((type, index) => (
              <option key={index} value={type}>{type}</option>
            ))}
          </select>
        </div>
        <div className="flex w-[50%] flex-wrap gap-3 sm:gap-5">
          <select 
            value={dataType} 
            onChange={handleDataTypeChange} 
            className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          >
            {dummyData.dataTypes.map((type, index) => (
              <option key={index} value={type}>{type}</option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <div id="chartOne" className="-ml-5">
          <ReactApexChart
            options={options}
            series={series}
            type="area"
            height={350}
          />
        </div>
      </div>
    </div>
  );
}
