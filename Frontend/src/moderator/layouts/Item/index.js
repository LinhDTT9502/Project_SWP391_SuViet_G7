// @mui material components
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';

// Material Dashboard 2 React components
import MDBox from '../../components/MDBox';
import MDTypography from '../../components/MDTypography';

// Material Dashboard 2 React example components
import DashboardLayout from '../../examples/LayoutContainers/DashboardLayout';
import DashboardNavbar from '../../examples/Navbars/DashboardNavbar';
import DataTable from '../../examples/Tables/DataTable';
// Data
import itemData from './data/itemData'
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button'

function Items() {
	const { columns, rows } = itemData();
	return (
		<DashboardLayout>
			<DashboardNavbar />
            <Link to='/moderator/item/add'><Button style={{color: 'white'}} variant="contained" >
				Create
			</Button></Link>
			<MDBox pt={6} pb={3}>
				<Grid container spacing={6}>
					<Grid item xs={12}>
						<Card>
							<MDBox
								mx={2}
								mt={-3}
								py={3}
								px={2}
								variant="gradient"
								bgColor="warning"
								borderRadius="lg"
								coloredShadow="info"
							>
								<MDTypography variant="h4" color="white" textAlign='center' fontSize='25px'>
									Cổ Vật
								</MDTypography>
							</MDBox>
							<MDBox pt={3}>
								<DataTable
									table={{ columns, rows }}
									isSorted={false}
									entriesPerPage={false}
									showTotalEntries={false}
									noEndBorder
								/>
							</MDBox>
						</Card>
					</Grid>
				</Grid>
			</MDBox>
		</DashboardLayout>
	);
}

export default Items;