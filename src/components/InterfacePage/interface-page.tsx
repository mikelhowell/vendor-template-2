"use client";

import React from "react";
import { Box, Grid } from "@mui/material";
import CustomChart from 'src/components/Chart-1/chart_first';
import Header from 'src/components/InterfaceHeader/header'
import SessionsByDeviceType from 'src/components/Chart-2/chart_second'
import SalesTable from 'src/components/Chart-3/chart_third'
import CustomerRateChart from 'src/components/Chart-4/chart_forth'
import TopSellingProductsChart from 'src/components/Chart-5/chart_fifth'


const InterfacePage = () => {
    const data = [
        { name: "Nov 2023", firstTime: 2000, returning: 800 },
        { name: "Dec 2023", firstTime: 2500, returning: 1000 },
        { name: "Jan 2024", firstTime: 2200, returning: 1200 },
        { name: "Feb 2024", firstTime: 2400, returning: 1500 },
        { name: "Mar 2024", firstTime: 2600, returning: 1700 },
        { name: "Apr 2024", firstTime: 2800, returning: 1800 },
        { name: "May 2024", firstTime: 3000, returning: 2000 },
      ];
    
  return (
    <Box sx={{ padding: "16px" }} alignItems="stretch">
      <Header />
      <Grid container spacing={2} >
        <Grid item xs={12} md={4}>
          <CustomChart
            header="Total Sales"
            totalAmount="$14,358,452.78"
            increasePercentage={50}
            data={data1}
            dataKeyCurrent="current"
            dataKeyPrevious="previous"
            chartType="line"
          />
        </Grid>
       <Grid item xs={12} md={4}>
            <TopSellingProductsChart
                header="Top selling products"
                products={productData}
            />
        </Grid>
        <Grid item xs={12} md={4}>
          <CustomChart
            header="Total orders"
            totalAmount="19,844"
            increasePercentage={30}
            data={data3}
            dataKeyCurrent="current"
            dataKeyPrevious="previous"
            chartType="line"
          />
        </Grid>
        <Grid item xs={12} md={4}>
            <SalesTable
                header="Retail sales by staff at register"
                rows={salesData}
            />
        </Grid>
        <Grid item xs={12} md={4}>
          <CustomChart
            header="Total orders"
            totalAmount="19,844"
            increasePercentage={30}
            data={data3}
            dataKeyCurrent="current"
            dataKeyPrevious="previous"
            chartType="line"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <CustomChart
            header="Total orders"
            totalAmount="19,844"
            increasePercentage={30}
            data={data3}
            dataKeyCurrent="current"
            dataKeyPrevious="previous"
            chartType="line"
          />
        </Grid>
        <Grid item xs={12} md={4}>
            <CustomerRateChart
            header="Returning customer rate"
            percentage="12%"
            isIncrease={true}
            data={data}
            colors={{
            firstTime: "#42a5f5", // Blue for "First time"
            returning: "#ab47bc", // Purple for "Returning"
            }}
        />
        </Grid>
        <Grid item xs={12} md={4}>
            <TopSellingProductsChart
                header="Top selling products"
                products={productData}
            />
        </Grid>
        
       
        <Grid item xs={12} md={4}>
          <CustomChart
            header="Total orders"
            totalAmount="19,844"
            increasePercentage={30}
            data={data3}
            dataKeyCurrent="current"
            dataKeyPrevious="previous"
            chartType="line"
          />
        </Grid>
        <Grid item xs={12} md={4}>
            <TopSellingProductsChart
                header="Top selling products"
                products={productData}
            />
        </Grid>
        <Grid item xs={12} md={4}>
            <TopSellingProductsChart
                header="Top selling products"
                products={productData}
            />
        </Grid>
        <Grid item xs={12} md={4} >
            <SessionsByDeviceType />
        </Grid>
        <Grid item xs={12} md={4}>
            <SalesTable
                header="Retail sales by staff at register"
                rows={salesData}
            />
        </Grid>
        <Grid item xs={12} md={4}>
            <SalesTable
                header="Retail sales by staff at register"
                rows={salesData}
            />
        </Grid>
        <Grid item xs={12} md={4}>
          <CustomChart
            header="Total orders"
            totalAmount="19,844"
            increasePercentage={30}
            data={data3}
            dataKeyCurrent="current"
            dataKeyPrevious="previous"
            chartType="line"
          />
        </Grid>
       
        <Grid item xs={12} md={4}>
            <TopSellingProductsChart
                header="Top selling products"
                products={productData}
            />
        </Grid>
        <Grid item xs={12} md={4}>
            <SalesTable
                header="Retail sales by staff at register"
                rows={salesData}
            />
        </Grid>
      </Grid>
    </Box>
  );
};

export default InterfacePage;
