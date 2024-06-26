import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '..';
import Comment from '../../../models/Comment';

describe('Teste para o componente PostComment', () => {
    
    test('Deve renderizar o componente corretamente', () => {
        render(<PostComment />);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    test('Deve adicionar 2 comentários na lista', () => {
        render(<PostComment />)

        const comment1 = new Comment(1, 'muito legal');
        const comment2 = new Comment(2, 'demais');

        fireEvent.change(screen.getByTestId('campo-coment'), {
            target: {
                value: comment1.comment
            }
        })

        fireEvent.click(screen.getByTestId('btn-coment'))
        expect(screen.getByText(comment1.comment)).toBeInTheDocument()

        fireEvent.change(screen.getByTestId('campo-coment'), {
            target: {
                value: comment2.comment
            }
        })

        fireEvent.click(screen.getByTestId('btn-coment'))
        expect(screen.getByText(comment2.comment)).toBeInTheDocument()


        console.log('Comentários após adicionar:', screen.getAllByText(/.*/g));
    })
});