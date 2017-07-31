/**
 * Created by jean.h.ma on 2/6/17.
 */
import React from "react";
import BasePage from "./BasePage";
import LayoutWithNav from "../components/LayoutWithNav";
import DataTableWithPagination from "../components/DataTableWithPagination";

export default class PagingDataTable extends BasePage {
	constructor(props) {
		super(props);
		this.dataSource = [
			{name: "Jean", sex: "mail"},
			{name: "Jean2", sex: "mail"},
			{name: "Jean3", sex: "mail"},
			{name: "Jean4", sex: "mail"},
			{name: "Jean5", sex: "mail"},
			{name: "Jean6", sex: "mail"},
			{name: "Jean7", sex: "mail"},
			{name: "Jean8", sex: "mail"},
			{name: "Jean9", sex: "mail"},
			{name: "Jean10", sex: "mail"},
			{name: "Jean11", sex: "mail"},
			{name: "Jean12", sex: "mail"},
		];
		this.dataTableColumns = [{
			name: "Name",
			render: (rowData)=>rowData['name']
		}, {
			name: "Sex",
			render: (rowData)=>rowData['sex']
		}];
		this.state={
			dataSource:[],
			pageSize:5,
			pageIndex:0,
			startPageNumber:0
		};
	}

	render() {
		return (
			<LayoutWithNav>
				<h5>Paging DataTable</h5>
				<DataTableWithPagination
					onPageChange={filter=>{
						this.updateState({
							dataSource:{$set:this.dataSource.slice(filter.pageIndex*filter.pageSize,filter.pageIndex*filter.pageSize+filter.pageSize)}
						});
					}}
					total={this.dataSource.length}
					pageSize={this.state.pageSize}
					pageIndex={this.state.pageIndex}
					startPageNumber={this.state.startPageNumber}
					dataSource={this.state.dataSource}
					columns={this.dataTableColumns}/>
			</LayoutWithNav>
		);
	}

	componentDidMount(){
		super.componentDidMount();
		this.updateState({
			dataSource:{$set:this.dataSource.slice(this.state.pageIndex*this.state.pageSize,this.state.pageIndex*this.state.pageSize+this.state.pageSize)}
		});
	}
}