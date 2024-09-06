import { Card, CardActionArea, CardActions, CardContent, Checkbox, Typography } from '@mui/material';

interface ICardConteiner{
    title: string,
    description: string,
    finish?: boolean;
    onComplete?: () => void; 
}

export const CardContainer:React.FC<ICardConteiner> = ({title, description, finish, onComplete}) => {
    return (
        <Card sx={{ width: '100%', borderRadius: '16px',boxShadow: '0 0 16px #666'}}>
            <CardActionArea sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <CardContent sx={{ padding: '12px'}}>
                    <Typography gutterBottom variant="h6" component="div">
                        {title}
                    </Typography>
                    <Typography color="darkorchid" variant="body2" sx={{ color: 'text.secondary'}}>
                        {description}
                    </Typography>
                </CardContent>
                <CardActions>
                <Checkbox
                        color='secondary'
                        size="large"
                        checked={finish}
                        onChange={onComplete}
                    />
                </CardActions>
            </CardActionArea>
        </Card>
    )
}